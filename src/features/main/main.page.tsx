import { NewRecipes } from "./../../widgets/NewRecipes/NewRecipes"
import { PageHeader } from "./../../widgets/PageHeader/PageHeader"

function MainPage() {
    return (
        <>
            <PageHeader/>
            <NewRecipes/>
        </>
        );
}

export const Component = MainPage;
