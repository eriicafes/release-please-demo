import { logger } from "./logger"

export function echo(message: string) {
    logger.info(message)
}

echo("foo bar")
