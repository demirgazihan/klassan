import {
    IndependentRoutes,
    UiKitRoutes,
    HomeRoutes
} from "@/Route/AuthRoutes";

export const sidebarConfig = [
    {
        name: "Ana Sayfa",
        path: HomeRoutes.HOME_PAGE,
        iconClass: "ph-duotone ph-house"
    },
    {
        name: "Koltuk Takımları",
        path: IndependentRoutes.WIDGETS_PAGE,
        iconClass: "ph-duotone ph-couch"
    },
    {
        type: "dropdown",
        title: "Component",
        iconClass: "ph-duotone ph-briefcase",
        name: "Ev Eşyaları",
        collapseId: "ui-kits",
        path: '/ui-kits',
        children: [
            { name: "Zigon Sehpalar", path: IndependentRoutes.WIDGETS_PAGE },
            { name: "Part Sehpalar", path: IndependentRoutes.WIDGETS_PAGE },
            { name: "Eco Sehpalar", path: IndependentRoutes.WIDGETS_PAGE },
            { name: "Katlanır Sehpalar", path: IndependentRoutes.WIDGETS_PAGE }
        ],
    },
];