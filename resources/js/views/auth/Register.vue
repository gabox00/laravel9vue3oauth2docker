<template>
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol :md="9" :lg="7" :xl="6">
                    <CCard class="mx-4">
                        <CCardBody class="p-4">
                            <CForm>
                                <h1>Register</h1>
                                <p class="text-medium-emphasis">Create your account</p>
                                <CInputGroup class="mb-3">
                                    <CInputGroupText>
                                        <CIcon :icon="cilUser"/>
                                    </CInputGroupText>
                                    <CFormInput placeholder="Username" autocomplete="username" v-model="name"/>
                                </CInputGroup>
                                <CInputGroup class="mb-3">
                                    <CInputGroupText>@</CInputGroupText>
                                    <CFormInput placeholder="Email" autocomplete="email" v-model="email"/>
                                </CInputGroup>
                                <CInputGroup class="mb-3">
                                    <CInputGroupText>
                                        <CIcon :icon="cilLockLocked"/>
                                    </CInputGroupText>
                                    <CFormInput
                                        type="password"
                                        placeholder="Password"
                                        autocomplete="new-password"
                                        v-model="password"
                                    />
                                </CInputGroup>
                                <CInputGroup class="mb-4">
                                    <CInputGroupText>
                                        <CIcon :icon="cilLockLocked"/>
                                    </CInputGroupText>
                                    <CFormInput
                                        type="password"
                                        placeholder="Repeat password"
                                        autocomplete="new-password"
                                    />
                                </CInputGroup>
                                <div class="d-grid">
                                    <CButton color="success" @click="onSubmit">Create Account</CButton>
                                </div>
                            </CForm>
                        </CCardBody>
                    </CCard>
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
} from "@coreui/vue";
import {CIcon} from "@coreui/icons-vue";
import {cilLockLocked, cilUser} from "@coreui/icons";

export default {
    name: 'Register',
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
        return {
            cilUser,
            cilLockLocked,
            email: '',
            name: '',
            password: '',
        }
    },
    methods:  {
        onSubmit() {
            axios.post('/api/register', {
                email: this.email,
                name: this.name,
                password: this.password
            }).then(function (data) {
                this.auth.setToken(data);
                this.$router.push('/admin');
            }).then(function (error) {
                alert(error);
            })
        }
    }
}
</script>
