import { logger } from "./logger"

export function echo() {
    logger.info("foo", "bar")
}

echo()
