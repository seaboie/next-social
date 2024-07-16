import { auth, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

//  1 create for check file name to protect.
const isProtectedRoute = createRouteMatcher(["/settings(.*)"]);

export default clerkMiddleware((auth, req) => {
    //  2 if get request; auth().protect();
    if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};