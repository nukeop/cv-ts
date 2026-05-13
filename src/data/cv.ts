import { parse } from "yaml";
import type { CvData } from "./cv.schema";

import raw from "./cv.yaml?raw";

export const cv: CvData = parse(raw) as CvData;
