import { initializeApp } from "firebase/app";

export const connectionFb = () => {
        try {
            const firebaseConfig = {
                apiKey: "AIzaSyAAEL9n2tR2h-coJS_F0bcDMQEPCqAk27g",
                authDomain: "blog-pessoal-4ad39.firebaseapp.com",
                projectId: "blog-pessoal-4ad39",
                storageBucket: "blog-pessoal-4ad39.appspot.com",
                messagingSenderId: "2941913279",
                appId: "1:2941913279:web:a697ec448490169e7ade0a"
            }

            const app = initializeApp(firebaseConfig);
            return app

        } catch (error) {
            console.error(error);
        }
}
