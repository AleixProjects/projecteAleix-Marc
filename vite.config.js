import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	root: './', // Directori root de Vite
	base: './', // Rutes relatives per als assets
	build: {
		outDir: 'dist', // Directori de sortida per al build
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, 'index.html'), // Página principal
				login: path.resolve(__dirname, 'app/login.html'),
				mainPage: path.resolve(__dirname, 'app/mainPage.html'),
				changePassword: path.resolve(__dirname, 'app/changePassword.html'),
				changePasswordConfirm: path.resolve(
					__dirname,
					'app/changePasswordConfirm.html'
				),
				configuration: path.resolve(__dirname, 'app/configuration.html'),
				delete: path.resolve(__dirname, 'app/delete.html'),
				editProfile: path.resolve(__dirname, 'app/editProfile.html'),
				myVotes: path.resolve(__dirname, 'app/myVotes.html'),
				myVotesExtended: path.resolve(__dirname, 'app/myVotesExtended.html'),
				profile: path.resolve(__dirname, 'app/profile.html'),
				profileUpdated: path.resolve(__dirname, 'app/profileUpdated.html'),
				registerFinalStepsMail: path.resolve(
					__dirname,
					'app/register-finalsteps-mail.html'
				),
				registerFinalSteps: path.resolve(
					__dirname,
					'app/register-finalsteps.html'
				),
				registerImage: path.resolve(__dirname, 'app/register-image.html'),
				registerMail: path.resolve(__dirname, 'app/register-mail.html'),
				registerMobile: path.resolve(__dirname, 'app/register-mobile.html'),
				register: path.resolve(__dirname, 'app/register.html'),
				selectedSite: path.resolve(__dirname, 'app/selectedSite.html'),
				yourIdea: path.resolve(__dirname, 'app/your-idea.html'),
			},
		},
	},
	server: {
		watch: {
			usePolling: true, // Per assegurar que els canvis es detecten en alguns entorns
		},
	},
})
