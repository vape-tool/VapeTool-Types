// GENERATED from @vapetool/types contract/analytics-contract.v1.json. DO NOT EDIT.
package com.stasbar.analytics

object GeneratedAnalyticsContract {
    const val VERSION = 1
    const val SHA256 = "7221de209724bf975da202732ce80fef84f563e32c1fe717359a6bebffd864fd"
    data class NumericRange(val minimum: Double, val maximum: Double)
    val COMMON_DIMENSIONS = setOf("platform", "app_version", "source", "campaign", "variant", "medium", "traffic_type", "event_id", "user_pseudo_id", "journey_id", "tool_segment", "entitlement_state", "is_eligible", "commercial_role")
    val EVENT_DIMENSIONS = mapOf(
        "session_started" to setOf("landing_path"),
        "calculator_opened" to setOf("calculator_type"),
        "calculation_completed" to setOf("calculator_type"),
        "item_saved" to setOf("item_type"),
        "community_feed_viewed" to setOf("community_role"),
        "community_contribution" to setOf("community_role", "contribution_type"),
        "offer_viewed" to setOf("offer_type", "price_id", "amount", "currency", "is_discounted"),
        "offer_clicked" to setOf("offer_type"),
        "offer_dismissed" to setOf("offer_type"),
        "offer_disabled" to emptySet(),
        "store_listing_opened" to emptySet(),
        "checkout_started" to setOf("offer_type", "price_id", "amount", "currency", "is_discounted", "product_id"),
        "checkout_abandoned" to setOf("offer_type", "reason"),
        "checkout_failed" to setOf("offer_type", "error_code"),
        "purchase_completed" to setOf("offer_type", "amount", "currency", "product_id"),
        "entitlement_granted" to setOf("entitlement", "grant_source", "product_id"),
        "support_requested" to setOf("support_channel"),
        "android_pro_activated" to setOf("attribution_status"),
        "research_survey_submitted" to setOf("purpose", "purchase_barrier", "research_volunteer", "community_participant"),
        "campaign_assigned" to emptySet(),
        "web_pro_app_arrived" to emptySet(),
        "web_pro_calculator_opened" to emptySet(),
        "web_pro_offer_viewed" to emptySet(),
        "web_pro_checkout_started" to emptySet(),
        "web_pro_checkout_failed" to setOf("checkout_failure"),
        "web_pro_checkout_cancelled" to emptySet(),
        "web_pro_purchase_completed" to emptySet(),
        "web_pro_entitlement_granted" to emptySet(),
        "web_anonymous_calculation_completed" to emptySet(),
        "web_authentication_requested" to emptySet(),
        "web_authentication_completed" to emptySet(),
        "web_post_login_continued" to emptySet(),
        "web_value_message_viewed" to emptySet(),
        "web_value_calculator_opened" to emptySet()
    )
    val ALLOWED_VALUES = mapOf(
        "platform" to setOf("web", "android"),
        "calculator_type" to setOf("coil", "liquid", "ohm_law", "battery"),
        "entitlement_state" to setOf("free", "pro", "web_pro", "cross_surface", "unknown"),
        "traffic_type" to setOf("production", "development", "test"),
        "tool_segment" to setOf("coil_builder", "liquid_mixer", "multi_tool_maker", "safety_utility_user", "unclassified"),
        "commercial_role" to setOf("eligible_active_user", "android_purchaser", "web_purchaser", "cross_surface_purchaser", "not_provided"),
        "attribution_status" to setOf("attributed", "unattributed")
    )
    val BOOLEAN_DIMENSIONS = setOf("is_eligible", "is_discounted", "research_volunteer", "community_participant")
    val BOUNDED_IDENTIFIER_DIMENSIONS = setOf("source", "campaign", "variant", "medium", "offer_type", "price_id", "reason", "error_code", "product_id", "entitlement", "grant_source", "item_type", "community_role", "contribution_type", "support_channel", "purpose", "purchase_barrier", "checkout_failure")
    val NUMERIC_DIMENSIONS = mapOf(
        "amount" to NumericRange(0.0, 1000000.0)
    )
    val PROHIBITED_KEYS = setOf("resistance", "wraps", "innerdiameter", "legslength", "pitch", "voltage", "basevoltage", "power", "heat", "heatflux", "current", "surface", "surfacearea", "wire", "wires", "cores", "outers", "gauge", "awg", "mm", "material", "alloy", "heightdiameter", "widthdiameter", "totallength", "sweetspot", "sweetspotlow", "sweetspothigh", "recipe", "recipepg", "recipevg", "flavors", "flavor", "flavorname", "nicotine", "nicotinestrength", "basepg", "basevg", "targetpg", "targetvg", "email", "username", "name", "firstname", "lastname", "displayname", "phone", "password", "token", "authtoken", "paymenttoken", "stripetoken", "card", "cvv", "address", "post", "postcontent", "comment", "commentcontent", "supportcontent", "message", "body")
}
