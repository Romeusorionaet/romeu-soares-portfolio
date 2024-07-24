export function SelectColorForEachRoute(route: string): string {
  const predefinedRouteColors: Record<string, string> = {
    technology: 'text-emerald-500',
  }

  if (predefinedRouteColors[route]) {
    return predefinedRouteColors[route]
  }

  return 'text-white/80'
}
