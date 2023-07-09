import { createLogger } from "./logger"

export function echo() {
    const logger = createLogger()

    logger.info("foo")
}

echo()
