// Use this file to populate dummy issues data for testing purposes.
import { Status } from "@prisma/client";

export const issueData: Array<{
  title: string;
  description: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}> = [
  {
    title: "Login button not responding",
    description:
      "Clicking the login button does not trigger any visible action or redirect. Affects Chrome and Firefox.",
    status: "OPEN",
    createdAt: new Date("2024-04-01T08:00:00"),
    updatedAt: new Date("2024-04-01T09:00:00"),
  },
  {
    title: "Error 500 on profile update",
    description:
      "Updating user profile info throws a 500 error, possibly related to backend validation logic.",
    status: "IN_PROGRESS",
    createdAt: new Date("2024-04-02T10:00:00"),
    updatedAt: new Date("2024-04-02T12:00:00"),
  },
  {
    title: "Password reset email not sent",
    description:
      "Users are not receiving password reset emails even after successful submission. Mail logs empty.",
    status: "OPEN",
    createdAt: new Date("2024-04-03T11:30:00"),
    updatedAt: new Date("2024-04-04T10:00:00"),
  },
  {
    title: "Dashboard loading slowly",
    description:
      "Initial dashboard load takes more than 8 seconds, causing performance concerns on mid-tier devices.",
    status: "OPEN",
    createdAt: new Date("2024-04-04T09:15:00"),
    updatedAt: new Date("2024-04-05T09:30:00"),
  },
  {
    title: "Exported reports have empty rows",
    description:
      "CSV exports contain blank rows even though data appears correctly in the UI.",
    status: "CLOSED",
    createdAt: new Date("2024-04-05T13:45:00"),
    updatedAt: new Date("2024-04-06T08:20:00"),
  },
  {
    title: "Dark mode toggle not persisting",
    description:
      "Switching to dark mode reverts after page reload; theme preference not saved in local storage.",
    status: "OPEN",
    createdAt: new Date("2024-04-06T14:00:00"),
    updatedAt: new Date("2024-04-07T11:00:00"),
  },
  {
    title: "Sidebar menu overlaps content",
    description:
      "On smaller screens, the sidebar menu overlaps the main content area, making it unreadable.",
    status: "IN_PROGRESS",
    createdAt: new Date("2024-04-07T09:00:00"),
    updatedAt: new Date("2024-04-07T15:00:00"),
  },
  {
    title: "Notification settings not saving",
    description:
      "After adjusting notification settings, changes are not persisted after refresh or login.",
    status: "CLOSED",
    createdAt: new Date("2024-04-08T10:20:00"),
    updatedAt: new Date("2024-04-09T08:45:00"),
  },
  {
    title: "User avatars not displaying",
    description:
      "Profile images for some users are not rendering. Console shows 404 for image URLs.",
    status: "OPEN",
    createdAt: new Date("2024-04-09T12:00:00"),
    updatedAt: new Date("2024-04-09T14:00:00"),
  },
  {
    title: "Broken link on Help page",
    description:
      "Clicking the ‘Contact Support’ button on the Help page leads to a 404 page.",
    status: "CLOSED",
    createdAt: new Date("2024-04-10T11:00:00"),
    updatedAt: new Date("2024-04-10T16:00:00"),
  },
  {
    title: "Calendar sync delays",
    description:
      "Events created in the web app take 2–3 minutes to sync with mobile apps.",
    status: "OPEN",
    createdAt: new Date("2024-04-11T13:00:00"),
    updatedAt: new Date("2024-04-12T10:00:00"),
  },
  {
    title: "Search results not relevant",
    description:
      "Search queries are returning unrelated or outdated results. Might be an indexing issue.",
    status: "IN_PROGRESS",
    createdAt: new Date("2024-04-12T08:30:00"),
    updatedAt: new Date("2024-04-13T09:00:00"),
  },
  {
    title: "Login with Google fails",
    description:
      "OAuth login with Google accounts fails for users with 2FA enabled.",
    status: "OPEN",
    createdAt: new Date("2024-04-13T14:30:00"),
    updatedAt: new Date("2024-04-13T15:30:00"),
  },
  {
    title: "Form validation missing",
    description:
      "Registration form allows submission of empty required fields due to missing frontend validation.",
    status: "OPEN",
    createdAt: new Date("2024-04-14T10:00:00"),
    updatedAt: new Date("2024-04-14T12:00:00"),
  },
  {
    title: "Unresponsive UI on modal open",
    description:
      "Opening a modal occasionally freezes the page. Likely a React re-rendering issue.",
    status: "IN_PROGRESS",
    createdAt: new Date("2024-04-15T09:00:00"),
    updatedAt: new Date("2024-04-16T09:00:00"),
  },
  {
    title: "Incorrect tax calculation",
    description:
      "Invoices show incorrect tax values for international customers.",
    status: "OPEN",
    createdAt: new Date("2024-04-16T11:00:00"),
    updatedAt: new Date("2024-04-17T08:00:00"),
  },
  {
    title: "Timezone mismatch in logs",
    description:
      "Timestamps in activity logs do not match user timezone settings.",
    status: "CLOSED",
    createdAt: new Date("2024-04-17T13:00:00"),
    updatedAt: new Date("2024-04-17T14:30:00"),
  },
  {
    title: "Mobile app crash on launch",
    description:
      "iOS users report that the app crashes immediately upon opening, likely related to recent update.",
    status: "IN_PROGRESS",
    createdAt: new Date("2024-04-18T10:00:00"),
    updatedAt: new Date("2024-04-19T09:00:00"),
  },
  {
    title: "Infinite loading on reports page",
    description:
      "The analytics reports page shows a spinner indefinitely when accessed with specific filters.",
    status: "OPEN",
    createdAt: new Date("2024-04-19T10:00:00"),
    updatedAt: new Date("2024-04-20T09:30:00"),
  },
  {
    title: "Forgot password link expired",
    description:
      "Reset password link expires too quickly, giving users only 5 minutes to complete the flow.",
    status: "CLOSED",
    createdAt: new Date("2024-04-20T08:00:00"),
    updatedAt: new Date("2024-04-20T08:45:00"),
  },
  {
    title: "Dropdowns not keyboard accessible",
    description:
      "Keyboard users are unable to navigate dropdowns using arrow keys or Enter.",
    status: "IN_PROGRESS",
    createdAt: new Date("2024-04-21T09:00:00"),
    updatedAt: new Date("2024-04-22T11:00:00"),
  },
  {
    title: "Misaligned buttons on Safari",
    description:
      "Action buttons appear offset in Safari 15+ due to flexbox compatibility issues.",
    status: "OPEN",
    createdAt: new Date("2024-04-22T12:00:00"),
    updatedAt: new Date("2024-04-23T08:00:00"),
  },
  {
    title: "Multiple notifications for one event",
    description:
      "Users are getting duplicate notifications for the same event trigger.",
    status: "CLOSED",
    createdAt: new Date("2024-04-23T10:00:00"),
    updatedAt: new Date("2024-04-24T09:00:00"),
  },
  {
    title: "Language selector resets",
    description:
      "After choosing a language, switching pages resets the preference.",
    status: "OPEN",
    createdAt: new Date("2024-04-24T14:00:00"),
    updatedAt: new Date("2024-04-25T12:00:00"),
  },
  {
    title: "Avatar upload fails silently",
    description:
      "Uploading avatar sometimes fails without user feedback. Possibly related to file size limits.",
    status: "IN_PROGRESS",
    createdAt: new Date("2024-04-25T08:00:00"),
    updatedAt: new Date("2024-04-26T08:30:00"),
  },
  {
    title: "Sidebar toggle doesn't persist",
    description:
      "After collapsing sidebar, the state doesn't persist across navigation.",
    status: "OPEN",
    createdAt: new Date("2024-04-26T09:00:00"),
    updatedAt: new Date("2024-04-27T08:00:00"),
  },
  {
    title: "Empty dashboard on first login",
    description:
      "First-time users see an empty dashboard. Likely a missing initialization issue.",
    status: "CLOSED",
    createdAt: new Date("2024-04-27T10:00:00"),
    updatedAt: new Date("2024-04-28T09:00:00"),
  },
  {
    title: "Spelling errors in tooltips",
    description: "Several tooltip labels have typos or inconsistent phrasing.",
    status: "IN_PROGRESS",
    createdAt: new Date("2024-04-28T14:00:00"),
    updatedAt: new Date("2024-04-29T08:30:00"),
  },
  {
    title: "Mobile menu not scrollable",
    description:
      "On smaller devices, long menus cannot be scrolled due to CSS overflow restriction.",
    status: "OPEN",
    createdAt: new Date("2024-04-29T10:00:00"),
    updatedAt: new Date("2024-04-30T09:30:00"),
  },
  {
    title: "Tooltip blocking button click",
    description:
      "When tooltip overlaps a button, click events do not register correctly.",
    status: "OPEN",
    createdAt: new Date("2024-04-30T08:45:00"),
    updatedAt: new Date("2024-05-01T08:00:00"),
  },
];
