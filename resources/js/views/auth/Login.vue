<template>
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol :md="8">
                    <CCardGroup>
                        <CCard class="p-4">
                            <CCardBody>
                                <CForm>
                                    <h1>Login</h1>
                                    <p class="text-medium-emphasis">Sign In to your account</p>
                                    <CInputGroup class="mb-3">
                                        <CInputGroupText>
                                            <CIcon :icon="cilUser"/>
                                        </CInputGroupText>
                                        <CFormInput
                                            placeholder="Email"
                                            autocomplete="email"
                                            v-model="email"
                                        />
                                    </CInputGroup>
                                    <CInputGroup class="mb-4">
                                        <CInputGroupText>
                                            <CIcon :icon="cilLockLocked"/>
                                        </CInputGroupText>
                                        <CFormInput
                                            type="password"
                                            placeholder="Password"
                                            autocomplete="current-password"
                                            v-model="password"
                                        />
                                    </CInputGroup>
                                    <CRow>
                                        <CCol :xs="6">
                                            <CButton color="primary" class="px-4" @click="onSubmit"> Login</CButton>
                                        </CCol>
                                        <CCol :xs="6" class="text-right">
                                            <CButton color="link" class="px-0">
                                                Forgot password?
                                            </CButton>
                                        </CCol>
                                    </CRow>
                                </CForm>
                            </CCardBody>
                        </CCard>
                        <CCard class="text-white bg-primary py-5" style="width: 44%">
                            <CCardBody class="text-center">
                                <div>
                                    <h2>Sign up</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                    <CButton color="light" variant="outline" class="mt-3">
                                        Register Now!
                                    </CButton>
                                </div>
                            </CCardBody>
                        </CCard>
                    </CCardGroup>
                </CCol>
            </CRow>
        </CContainer>
    </div>
</template>

<script>
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow
} from '@coreui/vue';
import {CIcon} from '@coreui/icons-vue';
import { cilUser, cilLockLocked } from '@coreui/icons';


import auth from "../../auth";
import { useRouter } from "vue-router";

const myRouter = useRouter();

export default {
    name: 'Login',
    components: {
        CContainer,
        CRow,
        CCol,
        CCardGroup,
        CCard,
        CCardBody,
        CButton,
        CForm,
        CInputGroup,
        CFormInput,
        CInputGroupText,
        CIcon
    },
    setup() {
        let email = '';
        let password = '';
        const router = useRouter();

        return {
            cilUser,
            cilLockLocked,
            email, password, router
        }
    },
    methods: {
        onSubmit() {
            let self = this
            axios.post('/api/login', {
                email: this.email,
                password: this.password
            }).then(function ({data}) {
                auth.setToken(data.data);
                self.$router.push('/welcome');
            }).catch(function (error) {
                alert(error);
            })
        }
    }
}
</script>
