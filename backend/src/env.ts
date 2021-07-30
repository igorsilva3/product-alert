// Load variables of the environment
export function env(key: string): string | undefined {
	return process.env[key] || undefined
}
