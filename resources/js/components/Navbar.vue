<template>
    <nav class="navbar">
        <RouterLink class="navbar__brand" to="/">
            Vuesplash
        </RouterLink>
        <div class="navbar__menu">
            <div class="navbar_item">
                <button class="button">
                    <i class="icon icn-md-add"></i>
                    Submit a photo
                </button>
            </div>
            <span class="navbar__item">
                username
            </span>
            <div class="navbar__item">
                <RouterLink class="button button--link" to="/login">
                    Logiin/Register
                </RouterLink>
            </div>
        </div>  
    </nav>
</template>