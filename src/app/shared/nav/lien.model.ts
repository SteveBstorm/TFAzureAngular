export class Lien {
    title : string = ""
    url? : string
    children? : Lien[] = []
    isChildrenVisible? : boolean
}