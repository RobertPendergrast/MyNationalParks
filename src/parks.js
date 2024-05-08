const parks = [
    {
        key: 1,
        name: "Acadia",
        background: "/images/acadia.jpeg"
    
    },
    {
        key: 2,
        name: "American Samoa",
        background: "/images/americansamoa.jpeg"
    },
    {
        key: 3,
        name: "Arches",
        background: "/images/arch.jpeg"
    },
    {
        key: 4,
        name: "Badlands National Park",
        background: "/images/badlands.jpeg"
    },
    {
        key: 5,
        name: "Big Bend National Park",
        background: "/images/bigbend.jpeg"
    },
    {
        key: 6,
        name: "Biscayne National Park",
        background: "/images/Biscayne.jpeg"
    },
    {
        key: 7,
        name: "Black Canyon National Park",
        background: "/images/blackcanyon.jpeg"
    },
    {
        key: 8,
        name: "Bryce Canyon National Park",
        background: "/images/bc.jpeg"
    },
    {
        key: 9,
        name: "Canyonlands National Park",
        background: "/images/cl.jpeg"
    },
    {
        key: 10,
        name: "Capitol Reef National Park",
        background: "/images/cr.jpeg"
    },
    {
        key: 11,
        name: "Carlsbad Caverns National Park",
        background: "/images/cc.jpeg"
    },
    {
        key: 12,
        name: "Channel Islands National Park",
        background: "/images/ci.jpeg"
    },
    {
        key: 13,
        name: "Congaree National Park",
        background: "/images/co.jpeg"
    },
    {
        key: 14,
        name: "Crater Lake National Park",
        background: "/images/clake.jpeg"
    },
    {
        key: 15,
        name: "Cuyahoga Valley National Park",
        background: "/images/cv.jpeg"
    },
    {
        key: 16,
        name: "Death Valley National Park",
        background: "/images/dv.jpeg"
    },
    {
        key: 17,
        name: "Denali National Park",
        background: "/images/denali.jpeg"
    },
    {
        key: 18,
        name: "Dry Tortugas National Park",
        background: "/images/dt.jpeg"
    },
    {
        key: 19,
        name: "Everglades National Park",
        background: "/images/ev.jpeg"
    },
    {
        key: 20,
        name: "Gates of the Arctic National Park",
        background: "/images/ga.jpeg"
    },
    {
        key: 21,
        name: "Gateway Arch National Park",
        background: "/images/gateway.jpeg"
    },
    {
        key: 22,
        name: "Glacier National Park",
        background: "/images/glacier.jpeg"
    },
    {
        key: 23,
        name: "Glacier Bay National Park",
        background: "/images/gb.jpeg"
    },
    {
        key: 24,
        name: "Grand Canyon National Park",
        background: "/images/gc.jpeg"
    },
    {
        key: 25,
        name: "Grand Teton National Park",
        background: "/images/gt.jpeg"
    },
    {
        key: 26,
        name: "Great Basin National Park",
        background: "/images/greatbasin.jpeg"
    },
    {
        key: 27,
        name: "Great Sand Dunes National Park",
        background: "/images/gs.jpeg"
    },
    {
        key: 28,
        name: "Great Smokey Mountains National Park",
        background: "/images/sm.jpeg"
    },
    {
        key: 29,
        name: "Guadalupe Mountains National Park",
        background: "/images/gm.jpeg"
    },
    {
        key: 30,
        name: "Haleakalā National Park",
        background: "/images/hal.jpeg"
    },
    {
        key: 31,
        name: "Hawaiʻi Volcanoes National Park",
        background: "/images/vol.jpeg"
    },
    {
        key: 32,
        name: "Hot Springs National Park",
        background: "/images/hotsprings.jpeg"
    },
    {
        key: 33,
        name: "Indiana Dunes National Park",
        background: "/images/id.jpeg"
    },
    {
        key: 34,
        name: "Isle Royale National Park",
        background: "/images/ir.jpeg"
    },
    {
        key: 35,
        name: "Joshua Tree National Park",
        background: "/images/jt.jpeg"
    },
    {
        key: 36,
        name: "Katmai National Park",
        background: "/images/kat.jpeg"
    },
    {
        key: 37,
        name: "Kenai Fjords National Park",
        background: "/images/kenai.jpeg"
    },
    {
        key: 38,
        name: "Kings Canyon National Park",
        background: "/images/kc.jpeg"
    },
    {
        key: 39,
        name: "Kobuk Valley National Park",
        background: "/images/kv.jpeg"
    },
    {
        key: 40,
        name: "Lake Clark National Park",
        background: "/images/lc.jpeg"
    },
    {
        key: 41,
        name: "Lassen Volcanic National Park",
        background: "/images/lv.jpeg"
    },
    {
        key: 42,
        name: "Mammoth Cave National Park",
        background: "/images/mc.jpeg"
    },
    {
        key: 43,
        name: "Mesa Verde National Park",
        background: "/images/mv.jpeg"
    },
    {
        key: 44,
        name: "Mount Rainier National Park",
        background: "/images/mr.jpeg"
    },
    {
        key: 45,
        name: "New River Gorge National Park",
        background: "/images/nrg.jpeg"
    },
    {
        key: 46,
        name: "North Cascades National Park",
        background: "/images/NorthCascades.jpeg"
    },
    {
        key: 47,
        name: "Olympic National Park",
        background: "/images/oly.jpeg"
    },
    {
        key: 48,
        name: "Petrified Forest National Park",
        background: "/images/pf.jpeg"
    },
    {
        key: 49,
        name: "Pinnacles National Park",
        background: "/images/pin.jpeg"
    },
    {
        key: 50,
        name: "Redwood National Park",
        background: "/images/rw.jpeg"
    },
    {
        key: 51,
        name: "Rocky Mountain National Park",
        background: "/images/rm.jpeg"
    },
    {
        key: 52,
        name: "Saguaro National Park",
        background: "/images/sag.jpeg"
    },
    {
        key: 53,
        name: "Sequoia National Park",
        background: "/images/seq.jpeg"
    },
    {
        key: 54,
        name: "Shenandoah National Park",
        background: "/images/shen.jpeg"
    },
    {
        key: 55,
        name: "Theodore Roosevelt National Park",
        background: "/images/tr.jpeg"
    },
    {
        key: 56,
        name: "Virgin Islands National Park",
        background: "/images/vi.jpeg"
    },
    {
        key: 57,
        name: "Voyageurs National Park",
        background: "/images/vnp.jpeg"
    },
    {
        key: 58,
        name: "White Sands National Park",
        background: "/images/ws.jpeg"
    },
    {
        key: 59,
        name: "Wind Cave National Park",
        background: "/images/wc.jpeg"
    },
    {
        key: 60,
        name: "Wrangell–St. Elias National Park",
        background: "/images/wst.jpeg"
    },
    {
        key: 61,
        name: "Yellowstone National Park",
        background: "/images/yellow.jpeg"
    },
    {
        key: 62,
        name: "Yosemite National Park",
        background: "/images/yosemite.jpeg"
    },
    {
        key: 63,
        name: "Zion National Park",
        background: "/images/zion.jpeg"
    }
];

export default parks;