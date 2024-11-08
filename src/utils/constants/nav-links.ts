import { HelpCircleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Features",
        href: "",
        menu: [
            {
                title: "Project Management",
                href: "/features/link-shortening",
                icon: Link2Icon,
            },
            {
                title: "Form Builder",
                href: "/",
                icon: LockIcon,
            },
            {
                title: "Advanced Analytics",
                href: "/",
                icon: LineChartIcon,
            },
            {
                title: "Custom your projects",
                href: "/",
                icon: QrCodeIcon,
            },
        ],
    },
    {
        title: "Pricing",
        href: "/pricing",
    },
    {
        title: "Enterprise",
        href: "/enterprise",
    },
    {
        title: "Changelog",
        href: "/changelog",
    },
];
