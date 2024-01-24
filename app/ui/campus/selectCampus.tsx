"use client";

import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface selectCampusProps {
    name: string[];
}

export default function SelectCampus({ name }: selectCampusProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div>
            <select
                className={`border-2 border-slate-300 rounded-lg p-2 mb-10 bg-pewter`}
                title="campus"
                value=""
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get("campus")?.toString()}
            >
                {name.map((campus) => (
                    <option key={campus} value={campus}>
                        {campus}
                    </option>
                ))}
            </select>
        </div>
    );
}
