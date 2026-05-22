"use client";

import AddGigForm from "@/app/components/Gig/AddGigForm";
import RouteModal from "@/app/components/Modal/RouteModal";
import { useRouter } from "next/navigation";

export default function AddGigModalPage() {
  const router = useRouter();

  return (
    <RouteModal>
      <AddGigForm variant="modal" onSuccess={() => router.back()} />
    </RouteModal>
  );
}
