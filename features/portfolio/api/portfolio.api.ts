import { getApiBaseUrl } from "@/lib/api/config"

import { fallbackPortfolio } from "../data/fallback-portfolio"
import type { PortfolioProfile } from "../types/portfolio.types"

export async function getPortfolio(): Promise<PortfolioProfile> {
  try {
    const response = await fetch(`${getApiBaseUrl()}/portfolio`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      return fallbackPortfolio
    }

    return (await response.json()) as PortfolioProfile
  } catch {
    return fallbackPortfolio
  }
}
