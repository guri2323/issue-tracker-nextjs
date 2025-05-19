"use client";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { Skeleton } from "../../components";
import toast, { Toaster } from "react-hot-toast";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get<User[]>("/api/users");
      return data;
    },
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });

  if (error) return null;

  if (isLoading) return <Skeleton />;

  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || "__unassigned__"}
        onValueChange={async (userId) => {
          console.log("userId", userId);
          console.log("issue", issue);
          try {
            await axios.patch("/api/issues/" + issue.id, {
              assignedToUserId:
                userId && userId !== "__unassigned__" ? userId : null,
            });
          } catch (error) {
            toast.error("Changes could not be saved");
          }
        }}
      >
        <Select.Trigger placeholder="Assign.." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="__unassigned__">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default AssigneeSelect;
