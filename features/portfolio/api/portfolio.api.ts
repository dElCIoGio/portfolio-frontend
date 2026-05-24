import { portfolioContent } from "../data/portfolio-content"
import type { PortfolioProfile } from "../types/portfolio.types"

export async function getPortfolio(): Promise<PortfolioProfile> {
  return portfolioContent
}
