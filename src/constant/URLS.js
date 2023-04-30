const URLS = {
    home: "/",
    profile: "/profile",
    pack: parameter => `/pack/${parameter}`,
    packCarts: parameter => `/pack/${parameter}/carts`,
    addFlashCart: parameter => `/pack/${parameter}/carts/add`,
    updateFlashCart: (parameter,parameter2) => `/pack/${parameter}/carts/update/${parameter2}`,
    addPack: "/add-pack",
    dailyGoal: "/daily-goal",
    register: "/register",
    otp: parameter => `/otp/${parameter}`,
    login: "/login",
    practice:"/practice"
}

export default URLS