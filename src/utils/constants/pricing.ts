// export const PLANS = [
//     {
//         name: "Free",
//         info: "For most individuals",
//         price: {
//             monthly: 0,
//             yearly: 0,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 100 tags", limit: "100 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "1K clicks/month" },
//             { text: "Community support", tooltip: "Get answers your questions on discord" },
//             { text: "AI powered suggestions", tooltip: "Get up to 100 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Start for free",
//             href: "/auth/sign-up?plan=free",
//             variant: "default",
//         }
//     },
//     {
//         name: "Pro",
//         info: "For small businesses",
//         price: {
//             monthly: 9,
//             yearly: 90,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 500 tags", limit: "500 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "20K clicks/month" },
//             { text: "Export click data", tooltip: "Upto 1K links" },
//             { text: "Priority support", tooltip: "Get 24/7 chat support" },
//             { text: "AI powered suggestions", tooltip: "Get up to 500 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Get started",
//             href: "/auth/sign-up?plan=pro",
//             variant: "purple",
//         }
//     },
//     {
//         name: "Business",
//         info: "For large organizations",
//         price: {
//             monthly: 49,
//             yearly: 490,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Unlimited tags" },
//             { text: "Customizable branded links"},
//             { text: "Track clicks", tooltip: "Unlimited clicks" },
//             { text: "Export click data", tooltip: "Unlimited clicks" },
//             { text: "Dedicated manager", tooltip: "Get priority support from our team" },
//             { text: "AI powered suggestions", tooltip: "Get unlimited AI powered suggestions" },
//         ],
//         btn: {
//             text: "Contact team",
//             href: "/auth/sign-up?plan=business",
//             variant: "default",
//         }
//     }
// ];

// export const PRICING_FEATURES = [
//     {
//         text: "Shorten links",
//         tooltip: "Create shortened links",
//     },
//     {
//         text: "Track clicks",
//         tooltip: "Track clicks on your links",
//     },
//     {
//         text: "See top countries",
//         tooltip: "See top countries where your links are clicked",
//     },
//     {
//         text: "Upto 10 tags",
//         tooltip: "Add upto 10 tags to your links",
//     },
//     {
//         text: "Community support",
//         tooltip: "Community support is available for free users",
//     },
//     {
//         text: "Priority support",
//         tooltip: "Get priority support from our team",
//     },
//     {
//         text: "AI powered suggestions",
//         tooltip: "Get AI powered suggestions for your links",
//     },
// ];

// export const WORKSPACE_LIMIT = 2;
export const PLANS = [
    {
        name: "Free",
        info: "For most individuals",
        price: {
            monthly: 0,
            yearly: 0,
        },
        features: [
            { text: "Up to 100 tags", limit: "100 tags" },
            { text: "Branded customization", tooltip: "Personalize with your brand's identity" },
            { text: "Click Tracking", tooltip: "Track up to 1K clicks per month" },
            { text: "Community Support", tooltip: "Get your questions answered in our community forum" },
            { text: "AI-Driven Insights", tooltip: "Receive up to 100 AI-generated recommendations" },
        ],
        btn: {
            text: "Start for free",
            href: "/auth/sign-up?plan=free",
            variant: "default",
        }
    },
    {
        name: "Pro",
        info: "For small businesses",
        price: {
            monthly: 9,
            yearly: Math.round(9 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "Up to 500 tags", limit: "500 tags" },
            { text: "Branded customization", tooltip: "Tailor with your brand's style" },
            { text: "Advanced Click Tracking", tooltip: "Track up to 20K clicks per month" },
            { text: "Data Export", tooltip: "Export click data for up to 1K links" },
            { text: "Priority Support", tooltip: "24/7 chat support available" },
            { text: "AI-Driven Insights", tooltip: "Get up to 500 AI-generated recommendations" },
        ],
        btn: {
            text: "Get started",
            href: "/auth/sign-up?plan=pro",
            variant: "purple",
        }
    },
    {
        name: "Business",
        info: "For large organizations",
        price: {
            monthly: 49,
            yearly: Math.round(49 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "Unlimited tags" },
            { text: "Full Brand Customization", tooltip: "Full flexibility to match your brand identity" },
            { text: "Comprehensive Click Tracking", tooltip: "Unlimited click tracking" },
            { text: "Unlimited Data Export", tooltip: "Unlimited click data export capabilities" },
            { text: "Dedicated Account Manager", tooltip: "Priority support and dedicated manager" },
            { text: "Unlimited AI-Driven Insights", tooltip: "Unlimited AI-powered recommendations" },
        ],
        btn: {
            text: "Contact team",
            href: "/auth/sign-up?plan=business",
            variant: "default",
        }
    }
];


export const PRICING_FEATURES = [
    {
        text: "Advanced Analytics",
        tooltip: "Gain insights into user engagement and link performance trends",
    },
    {
        text: "Click Tracking",
        tooltip: "Monitor link performance with click tracking",
    },
    {
        text: "Top Country Insights",
        tooltip: "View the top countries engaging with your links",
    },
    {
        text: "Tagging Capabilities",
        tooltip: "Organize your links with up to 10 tags",
    },
    {
        text: "Community Support",
        tooltip: "Access our community support for helpful resources",
    },
    {
        text: "Priority Customer Support",
        tooltip: "Receive faster responses and dedicated support",
    },
    {
        text: "AI-Driven Suggestions",
        tooltip: "Get smart recommendations powered by AI for optimized link engagement",
    },
];


export const WORKSPACE_LIMIT = 2;