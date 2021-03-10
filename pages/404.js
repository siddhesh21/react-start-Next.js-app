import Link from "next/link";
import React from "react";

function FourOhFour() {
  return (
    <div>
      <h1>404 | Damn Page Not Found</h1>
      <Link href="/posts">Go Back to Posts</Link>
    </div>
  );
}
export default FourOhFour;
