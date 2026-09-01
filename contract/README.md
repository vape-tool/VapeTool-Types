# Analytics contract ownership

`analytics-contract.v1.json` is the canonical privacy and reporting contract for
VapeTool Web, Android, and Firebase. It owns event names, dimensions, bounded
values, and prohibited keys; platform adapters continue to own transport and
runtime-specific identifier validation.

To change the contract:

1. Update the JSON here and increment `contractVersion` for a breaking change.
2. Run `node scripts/generate-analytics-contract.mjs --workspace` from this repo.
3. Commit the generated outputs in this repo and each affected platform repo.
4. Run every platform release gate. Generated files must never be edited by hand.

Each platform vendors the same versioned JSON artifact and generated hash so its
standalone CI can reject stale generated code. Publication of a new
`@vapetool/types` package can follow the normal package release process; platform
validation does not depend on an unpublished package.
