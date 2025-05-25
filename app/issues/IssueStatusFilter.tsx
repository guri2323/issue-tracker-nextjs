"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const statuses: { label: string; value?: Status }[] = [
  { label: "ALL", value: "ALL" },
  { label: "OPEN", value: "OPEN" },
  { label: "IN_PROGRESS", value: "IN_PROGRESS" },
  { label: "CLOSED", value: "CLOSED" },
];
const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const buildIssueQueryString = ({
    status,
    orderBy,
  }: {
    status?: string;
    orderBy?: string | null;
  }): string => {
    const params = new URLSearchParams();

    if (status && status !== "ALL") {
      params.set("status", status);
    }

    if (orderBy) {
      params.set("orderBy", orderBy);
    }

    return params.toString() ? `?${params.toString()}` : "";
  };
  return (
    <Select.Root
      defaultValue={searchParams.get("status") || "ALL"}
      onValueChange={(status) => {
        const query = buildIssueQueryString({
          status,
          orderBy: searchParams.get("orderBy"),
        });

        router.push(`/issues${query}`);
      }}
    >
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
