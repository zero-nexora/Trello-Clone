import { checkSubscription } from "@/lib/subscription"

const OrganizationIdPage = async () => {
  const isPro = await checkSubscription();
  
  return (
    <div>OrganizationIdPage</div>
  )
}

export default OrganizationIdPage