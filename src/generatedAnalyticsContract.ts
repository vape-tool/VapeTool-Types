// GENERATED from @vapetool/types contract/analytics-contract.v1.json. DO NOT EDIT.
export const ANALYTICS_CONTRACT_VERSION = 1 as const;
export const ANALYTICS_CONTRACT_SHA256 = '69de06f3cf0eca1a86516b90d859b402ec7cad077f067d501369a89037a00b1d' as const;
export const ANALYTICS_COMMON_DIMENSIONS = [
  "platform",
  "app_version",
  "source",
  "campaign",
  "variant",
  "medium",
  "traffic_type",
  "event_id",
  "user_pseudo_id",
  "journey_id",
  "tool_segment",
  "entitlement_state",
  "is_eligible",
  "commercial_role"
] as const;
export const ANALYTICS_EVENT_DIMENSIONS = {
  "session_started": [
    "landing_path"
  ],
  "calculator_opened": [
    "calculator_type"
  ],
  "calculation_completed": [
    "calculator_type"
  ],
  "item_saved": [
    "item_type"
  ],
  "community_feed_viewed": [
    "community_role"
  ],
  "community_contribution": [
    "community_role",
    "contribution_type"
  ],
  "offer_viewed": [
    "offer_type",
    "price_id",
    "amount",
    "currency",
    "is_discounted"
  ],
  "offer_dismissed": [
    "offer_type"
  ],
  "offer_disabled": [],
  "store_listing_opened": [],
  "checkout_started": [
    "offer_type",
    "price_id",
    "amount",
    "currency",
    "is_discounted",
    "product_id"
  ],
  "checkout_abandoned": [
    "offer_type",
    "reason"
  ],
  "checkout_failed": [
    "offer_type",
    "error_code"
  ],
  "purchase_completed": [
    "offer_type",
    "amount",
    "currency",
    "product_id"
  ],
  "entitlement_granted": [
    "entitlement",
    "grant_source",
    "product_id"
  ],
  "support_requested": [
    "support_channel"
  ],
  "android_pro_activated": [
    "attribution_status"
  ],
  "research_survey_submitted": [
    "purpose",
    "purchase_barrier",
    "research_volunteer",
    "community_participant"
  ],
  "campaign_assigned": [],
  "web_pro_app_arrived": [],
  "web_pro_calculator_opened": [],
  "web_pro_offer_viewed": [],
  "web_pro_checkout_started": [],
  "web_pro_checkout_failed": [
    "checkout_failure"
  ],
  "web_pro_checkout_cancelled": [],
  "web_pro_purchase_completed": [],
  "web_pro_entitlement_granted": [],
  "web_anonymous_calculation_completed": [],
  "web_authentication_requested": [],
  "web_authentication_completed": [],
  "web_post_login_continued": [],
  "web_value_message_viewed": [],
  "web_value_calculator_opened": []
} as const;
export const ANALYTICS_ALLOWED_VALUES = {
  "platform": [
    "web",
    "android"
  ],
  "calculator_type": [
    "coil",
    "liquid",
    "ohm_law"
  ],
  "entitlement_state": [
    "free",
    "pro",
    "web_pro",
    "cross_surface",
    "unknown"
  ],
  "traffic_type": [
    "production",
    "development",
    "test"
  ],
  "tool_segment": [
    "coil_builder",
    "liquid_mixer",
    "multi_tool_maker",
    "safety_utility_user",
    "unclassified"
  ],
  "commercial_role": [
    "eligible_active_user",
    "android_purchaser",
    "web_purchaser",
    "cross_surface_purchaser",
    "not_provided"
  ],
  "attribution_status": [
    "attributed",
    "unattributed"
  ]
} as const;
export const ANALYTICS_BOOLEAN_DIMENSIONS = [
  "is_eligible",
  "is_discounted",
  "research_volunteer",
  "community_participant"
] as const;
export const ANALYTICS_BOUNDED_IDENTIFIER_DIMENSIONS = [
  "source",
  "campaign",
  "variant",
  "medium",
  "offer_type",
  "price_id",
  "reason",
  "error_code",
  "product_id",
  "entitlement",
  "grant_source",
  "item_type",
  "community_role",
  "contribution_type",
  "support_channel",
  "purpose",
  "purchase_barrier",
  "checkout_failure"
] as const;
export const ANALYTICS_NUMERIC_DIMENSIONS = {
  "amount": {
    "minimum": 0,
    "maximum": 1000000
  }
} as const;
export const PROHIBITED_ANALYTICS_KEYS = [
  "resistance",
  "wraps",
  "innerdiameter",
  "legslength",
  "pitch",
  "voltage",
  "basevoltage",
  "power",
  "heat",
  "heatflux",
  "current",
  "surface",
  "surfacearea",
  "wire",
  "wires",
  "cores",
  "outers",
  "gauge",
  "awg",
  "mm",
  "material",
  "alloy",
  "heightdiameter",
  "widthdiameter",
  "totallength",
  "sweetspot",
  "sweetspotlow",
  "sweetspothigh",
  "recipe",
  "recipepg",
  "recipevg",
  "flavors",
  "flavor",
  "flavorname",
  "nicotine",
  "nicotinestrength",
  "basepg",
  "basevg",
  "targetpg",
  "targetvg",
  "email",
  "username",
  "name",
  "firstname",
  "lastname",
  "displayname",
  "phone",
  "password",
  "token",
  "authtoken",
  "paymenttoken",
  "stripetoken",
  "card",
  "cvv",
  "address",
  "post",
  "postcontent",
  "comment",
  "commentcontent",
  "supportcontent",
  "message",
  "body"
] as const;
