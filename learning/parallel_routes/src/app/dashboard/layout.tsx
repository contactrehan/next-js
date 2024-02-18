import React from "react";

export default function DashboardLayout({
  children,
  admins,
  team,
}: {
  children: React.ReactNode;
admins:React.ReactNode
team:React.ReactNode
}) {
  return (
    <div>
      <h1>Dashboard Header from Layout</h1>
      {children}
      {admins}
      {team}
    </div>
  );
}
