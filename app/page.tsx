import { getPortfolio } from "@/features/portfolio/api/portfolio.api"
import { PortfolioPage } from "@/features/portfolio/components/PortfolioPage"

export default async function Home() {
  const portfolio = await getPortfolio()

  return <PortfolioPage portfolio={portfolio} />
}
