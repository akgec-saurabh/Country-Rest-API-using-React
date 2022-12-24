import "./ListSkeleton.scss";
import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ListSkeleton = ({ hide, list }) => {
  return (
    <>
      {Array(list)
        .fill(1)
        .map((skeleton, i) => (
          <div key={i} className={`boxsk ${hide ? "hide" : ""}`}>
            <div className="image">
              <Stack>
                <Skeleton variant="rectangular" width="100%" height={150} />
              </Stack>
            </div>

            <div className="details">
              <h3>
                <Stack>
                  <Skeleton
                    animation="wave"
                    variant="text"
                    width="100%"
                    sx={{ fontSize: "2rem" }}
                  />
                </Stack>
              </h3>

              <Stack>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="100%"
                  sx={{ fontSize: "1rem" }}
                />
              </Stack>

              <Stack>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="100%"
                  sx={{ fontSize: "1rem" }}
                />
              </Stack>

              <Stack>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="100%"
                  sx={{ fontSize: "1rem" }}
                />
              </Stack>
            </div>
          </div>
        ))}
    </>
  );
};

export default ListSkeleton;
