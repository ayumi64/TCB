const Bookmark_Icon = '/html/body/div[4]/div[2]/div[1]/div[1]/div/ul/li[4]/div/button'
const Bookmark_Apps = '/html/body/div[4]/div[2]/div[3]/div/div/div[1]/div/div/div[1]'
const Bookmark_Search = '/html/body/div[4]/div[2]/div[3]/div/div/div[1]/div/div/div[2]'
const Bookmark_Other = '/html/body/div[4]/div[2]/div[3]/div/div/div[1]/div/div/div[3]'
const Bookmark_Add = '/html/body/div[4]/div[2]/div[3]/div/div/div[1]/a'
const Bookmark_Add_Name = '/html/body/div[18]/div[2]/div/div[1]/div[2]/div/input'
const Bookmark_Add_URL = ''
const BookMark_Add_Cancel = '/html/body/div[18]/div[3]/div[1]/button'
const Bookmark_Add_OK = '/html/body/div[18]/div[3]/div[2]/button'


class Bookmarks {

    clickBookmarkBtn() {
        $(Bookmark_Icon).click();
        return this;
    }

    clickaBookmarkApp() {
        $(Bookmark_Apps).click();
        return this;
    }

    clickBookmarkSearch() {
        $(Bookmark_Search).click();
        return this;
    }

    clickBookmarkOther() {
        $(Bookmark_Other).click();
        return this;
    }

    clickBookmarkAdd() {
        $(Bookmark_Add).click();
        return this;
    }

    inputBookmarkName(Name) {
        $(Bookmark_Add_Name).setValue(Name);
        return this;
    }

    inputBookmarkURL(URL) {
        $(Bookmark_Add_URL).setValue(URL);
        return this;
    }

    clickBookmarkCancel() {
        $(BookMark_Add_Cancel).click();
        return this;
    }

    clickBookmarkOK() {
        $(Bookmark_Add_OK).click();
        return this;
    }


}

module.exports = new Bookmarks();