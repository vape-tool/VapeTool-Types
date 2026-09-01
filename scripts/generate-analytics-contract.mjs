import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const workspaceRoot = resolve(repoRoot, "..");
const contractPath = join(repoRoot, "contract/analytics-contract.v1.json");
const contract = JSON.parse(readFileSync(contractPath, "utf8"));
const canonical = JSON.stringify(contract);
const sha256 = createHash("sha256").update(canonical).digest("hex");
const check = process.argv.includes("--check");
const includeWorkspace = process.argv.includes("--workspace");

const ts =
  "// GENERATED from @vapetool/types contract/analytics-contract.v1.json. DO NOT EDIT.\n" +
  `export const ANALYTICS_CONTRACT_VERSION = ${contract.contractVersion} as const;\n` +
  `export const ANALYTICS_CONTRACT_SHA256 = '${sha256}' as const;\n` +
  `export const ANALYTICS_COMMON_DIMENSIONS = ${JSON.stringify(contract.commonDimensions, null, 2)} as const;\n` +
  `export const ANALYTICS_EVENT_DIMENSIONS = ${JSON.stringify(contract.eventDimensions, null, 2)} as const;\n` +
  `export const ANALYTICS_ALLOWED_VALUES = ${JSON.stringify(contract.allowedValues, null, 2)} as const;\n` +
  `export const ANALYTICS_BOOLEAN_DIMENSIONS = ${JSON.stringify(contract.booleanDimensions, null, 2)} as const;\n` +
  `export const ANALYTICS_BOUNDED_IDENTIFIER_DIMENSIONS = ${JSON.stringify(contract.boundedIdentifierDimensions, null, 2)} as const;\n` +
  `export const ANALYTICS_NUMERIC_DIMENSIONS = ${JSON.stringify(contract.numericDimensions, null, 2)} as const;\n` +
  `export const PROHIBITED_ANALYTICS_KEYS = ${JSON.stringify(contract.prohibitedKeys, null, 2)} as const;\n`;

const kotlinString = (value) =>
  `"${value.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`;
const kotlinSet = (values) =>
  values.length === 0
    ? "emptySet()"
    : `setOf(${values.map(kotlinString).join(", ")})`;
const kotlinMap = (value, valueRenderer) =>
  `mapOf(\n${Object.entries(value)
    .map(([key, item]) => `        ${kotlinString(key)} to ${valueRenderer(item)}`)
    .join(",\n")}\n    )`;
const numericMap = kotlinMap(
  contract.numericDimensions,
  (range) => `NumericRange(${range.minimum}.0, ${range.maximum}.0)`,
);
const kotlin =
  "// GENERATED from @vapetool/types contract/analytics-contract.v1.json. DO NOT EDIT.\n" +
  "package com.stasbar.analytics\n\n" +
  "object GeneratedAnalyticsContract {\n" +
  `    const val VERSION = ${contract.contractVersion}\n` +
  `    const val SHA256 = "${sha256}"\n` +
  "    data class NumericRange(val minimum: Double, val maximum: Double)\n" +
  `    val COMMON_DIMENSIONS = ${kotlinSet(contract.commonDimensions)}\n` +
  `    val EVENT_DIMENSIONS = ${kotlinMap(contract.eventDimensions, kotlinSet)}\n` +
  `    val ALLOWED_VALUES = ${kotlinMap(contract.allowedValues, kotlinSet)}\n` +
  `    val BOOLEAN_DIMENSIONS = ${kotlinSet(contract.booleanDimensions)}\n` +
  `    val BOUNDED_IDENTIFIER_DIMENSIONS = ${kotlinSet(contract.boundedIdentifierDimensions)}\n` +
  `    val NUMERIC_DIMENSIONS = ${numericMap}\n` +
  `    val PROHIBITED_KEYS = ${kotlinSet(contract.prohibitedKeys)}\n` +
  "}\n";

const contractCopy = `${JSON.stringify(contract, null, 2)}\n`;
const targets = [
  [join(repoRoot, "src/generatedAnalyticsContract.ts"), ts],
  [join(repoRoot, "generated/kotlin/GeneratedAnalyticsContract.kt"), kotlin],
];
if (includeWorkspace) {
  targets.push(
    [
      join(
        workspaceRoot,
        "VapeTool-Webapp/analytics-contract/analytics-contract.v1.json",
      ),
      contractCopy,
    ],
    [
      join(
        workspaceRoot,
        "VapeTool-Webapp/src/lib/analytics/generated-contract.ts",
      ),
      ts,
    ],
    [
      join(
        workspaceRoot,
        "Vape-Tool-Firebase/functions/analytics-contract/analytics-contract.v1.json",
      ),
      contractCopy,
    ],
    [
      join(
        workspaceRoot,
        "Vape-Tool-Firebase/functions/src/generatedAnalyticsContract.ts",
      ),
      ts,
    ],
    [
      join(
        workspaceRoot,
        "Vape-Tool-Android/analytics-contract/analytics-contract.v1.json",
      ),
      contractCopy,
    ],
    [
      join(
        workspaceRoot,
        "Vape-Tool-Android/app/src/main/java/com/stasbar/analytics/GeneratedAnalyticsContract.kt",
      ),
      kotlin,
    ],
  );
}

let stale = false;
for (const [target, content] of targets) {
  if (check) {
    if (!existsSync(target) || readFileSync(target, "utf8") !== content) {
      stale = true;
      process.stderr.write(`Stale analytics contract output: ${target}\n`);
    }
  } else {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, content);
  }
}
if (stale) process.exitCode = 1;
