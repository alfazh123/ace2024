"use client";

import { useSearchParams } from "next/navigation";
import { NextRequest } from "next/server";
import { blogs } from "@/app/campus/page";

export async function Select(request: NextRequest) {
    const search = useSearchParams();
    console.log(blogs);
    return Response.json(blogs);
}
