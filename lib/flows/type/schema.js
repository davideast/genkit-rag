"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.output = exports.input = exports.RaceSchema = void 0;
const z = __importStar(require("zod"));
exports.RaceSchema = z.object({
    name: z.string(),
    date: z.date(),
    time: z.string(),
    location: z.object({
        name: z.string(),
        address: z.string(),
        city: z.string(),
        state: z.string(),
        zip: z.string(),
        latitude: z.number(),
        longitude: z.number(),
    }),
    organizer: z.object({
        name: z.string(),
        email: z.string(),
    }),
    distances: z.record(z.string(), z.object({
        startTime: z.string(),
        registrationFee: z.object({
            early: z.number(),
            late: z.number(),
            raceDay: z.number(),
        }),
        courseMapUrl: z.string().optional(),
        waterStations: z
            .object({
            mileMarkers: z.array(z.number()),
            gatoradeAvailable: z.boolean().optional(),
        })
            .optional(),
        cutOffTime: z.string().optional(),
    })),
    virtualOption: z.object({
        available: z.boolean(),
        infoUrl: z.string(),
    }),
    series: z.array(z.string()).optional(),
    charity: z
        .object({
        name: z.string(),
        url: z.string(),
        imageUrl: z.string().optional(),
    })
        .optional(),
    runnerReceives: z.array(z.string()),
    tShirt: z.object({
        designImageUrl: z.string().optional(),
        guaranteedUntil: z.date(),
    }),
    medal: z.object({
        designInfo: z.string().optional(),
    }),
    results: z.object({
        liveUrl: z.string(),
        finalUrl: z.string().optional(),
        runnerTrackingAvailable: z.boolean(),
        runnerTrackingInfoUrl: z.string().optional(),
    }),
    awards: z.object({
        categories: z.array(z.string()),
    }),
    photos: z.object({
        info: z.string().optional(),
        facebookPageUrl: z.string().optional(),
    }),
    socialMediaChallenge: z.object({
        instagram: z.string().optional(),
        facebook: z.string().optional(),
    }),
    packetPickup: z.object({
        options: z.array(z.object({
            location: z.string(),
            address: z.string().optional(),
            date: z.date().optional(),
            time: z.string().optional(),
        })),
    }),
    raceDayRegistration: z.object({
        available: z.boolean(),
        info: z.string().optional(),
    }),
    restrooms: z.object({
        location: z.string().optional(),
    }),
    volunteers: z.object({
        info: z.string().optional(),
    }),
    weatherPolicy: z.object({
        info: z.string().optional(),
        facebookPageUrl: z.string().optional(),
    }),
    refundsTransfers: z.object({
        policyUrl: z.string(),
    }),
    other: z.array(z.string()).optional(),
    eventCategories: z.array(z.string()).optional(),
    eventTags: z.array(z.string()).optional(),
});
exports.input = z.string().describe('Page URL');
exports.output = exports.RaceSchema;
//# sourceMappingURL=schema.js.map