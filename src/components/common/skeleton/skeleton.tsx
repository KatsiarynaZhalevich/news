import { Skeleton } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

const SkeletonTemplate = (prop: {count: number}) => {
    const templateArr = new Array(prop.count).fill(0);
    return  <> {templateArr.map(() => <Skeleton key={uuidv4()} variant="rounded" height={50} className="mb-6"/>)} </>
}

export default SkeletonTemplate;