<template>
    <div class="d-flex flex-row min-vh-100 min-vw-100">
        <AppSidebar class="min-vh-100"/>
        <div class="wrapper flex-fill d-flex flex-column min-vh-100 bg-light">
            <AppHeader/>
            <div class="body flex-grow-1 px-3">
                <CContainer lg>
                    <router-view/>
                </CContainer>
            </div>
            <AppFooter/>
        </div>
    </div>
</template>
<script>
import {CContainer} from '@coreui/vue'
import AppFooter from '../../components/AppFooter.vue'
import AppHeader from '../../components/AppHeader.vue'
import AppSidebar from '../../components/AppSidebar.vue'

export default {
    name: 'DefaultLayout',
    components: {
        AppFooter,
        AppHeader,
        AppSidebar,
        CContainer,
    },
}
</script>
