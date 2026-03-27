import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Pushkarna Chronicles | Samast Sanatani Sangh",
  description: "Tracing the spiritual and cultural lineage of the Pushkarna Brahmins.",
};

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
