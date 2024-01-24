"use client";

import { useSearchParams } from "next/navigation";

const searchParams = useSearchParams();

export function GetCampus() {
    const campus = searchParams.get("campus")?.toString();
    return campus;
}
