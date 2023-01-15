import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const buildsRouter = router({
    createBuild: publicProcedure
        .input(z.object({ matchUp: z.string(), build: z.string(), buildType: z.string(), description: z.string().nullable(), title: z.string().nullable(), author: z.string().nullable() }))
        .mutation(async ({ input, ctx }) => {
            // Save build order to database
            const build = await ctx.prisma.buildOrder.create({
                data: {
                    ...input
                }
            })
            return build
        }),

    getBuildsByMatchUp: publicProcedure
        .input(z.object({ matchUp: z.string() }))
        .query(async ({ ctx, input }) => {
            const builds = await ctx.prisma.buildOrder.findMany({
                where: { matchUp: input.matchUp }
            })
            return builds
        }),

    getBuildById: publicProcedure
        .input(z.object({ buildId: z.string() }))
        .query(async ({ ctx, input }) => {
            const build = await ctx.prisma.buildOrder.findUnique({
                where: { id: input.buildId }
            })
            return build
        })

});
