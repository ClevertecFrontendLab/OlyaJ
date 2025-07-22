import { Blog } from "./../../widgets/Blog/Blog";
import { MostJuicy } from "./../../widgets/MostJuicy/MostJuicy"
import { NewRecipes } from "./../../widgets/NewRecipes/NewRecipes"
import { PageHeader } from "./../../widgets/PageHeader/PageHeader"

function MainPage() {
    return (
        <>
            <PageHeader/>
            <NewRecipes/>
            <MostJuicy/>
            <Blog/>
        </>
        );
}

export const Component = MainPage;
