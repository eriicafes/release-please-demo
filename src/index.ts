import { logger } from "./logger"

export function echo(message: string) {
    logger.info("pre echo")

    logger.info(message)

    logger.info("post echo")
}

echo("foo bar")
