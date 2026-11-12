import so70s from "./assets/so70s.jpg"
import bookCover from "./assets/bookcover.jpg"
import lifeCover from "./assets/lifefront.jpg"
import lifeHingeDamage from "./assets/lifehingedamage.jpg"
import okeCover from "./assets/okefront.jpg"
import okeSpine from "./assets/okespine.jpg"
import "./old_books.css"

export function OldBooks() {
    return /* html */ `
    <h1>
        <div class="oldBooks">
                <div class="oldBooksPill">
                    Old books are kinda cool I think
                    <div class="pillUnderline0">
                    </div>
                    <div class="pillUnderline1">
                    </div>
                    <div class="pillUnderline2">
                    </div>
                    <div class="pillUnderline1">
                    </div>
                    <div class="retroContent">
                        <figure>
                            <div class="pictureContainer">
                                <div class="pictureLayout">
                                    <img src="${bookCover}" alt='A brown hardcover book with gold-embossed title "The Complete Indoor Gardener" and subtle art nouveau framing'/>
                                    <img src="${so70s}" alt='A double-page spread illustration featuring the outline of a two-story house, depicted as though it were the perimeter of a half-complete puzzle. A man and a woman stand in the bottom left of the house illustration, with the woman reading a book from her hand. They are illustrated in a 70s graphic style with bold lines and contemporary fashion. The section is titled "1. Creating your indoor garden".'/>
                                </div>
                            </div>
                            <figcaption>
                                    The Complete Indoor Gardener, First American Edition (1975) (ISBN 0-394-73045-3)
                            </figcaption>
                        </figure>
                        <div class="paragraphBackdrop">
                            <div class="paragraphArea">
                                <p>
                                    I found this book at Goodwill the other day, Saturday November 7. 
                                </p>
                                <p>
                                    I think I see a hardcover book with a cotton fabric wrapping and immediately know it's worth checking out. Maybe it's not gonna be my style, maybe it's not gonna be a subject I'm interested in, but I know at the very least that it's something that someone found worthwhile.
                                </p>
                                <p>
                                    This particular book was actually manufactured during the period when these cloth-bound books were becoming less common, as the cloth was gradually replaced with paper. Paper has many benefits over cloth: it's cheaper, it's easier to transfer a graphic to, it's more easily folded, etc. These properties result in lower cost and increased accessibility. However, it's less durable. The importance of cover material durability might not be immediately obvious; after all, it's the cardboard beneath the cloth that is responsible for providing structural integrity to a hardcover book. Because of this, in some ways it can be more helpful to view the book covering as a <em> mechanical </em> component of the book.
                                </p>
                                <p>
                                    The cover material of a book is responsible, in large part, for supporting the hinging opening and closed of the book. This means it is subject to the repeated strain of folding and unfolding. Any engineer will tell you that moving parts are an area to which special attention must be paid with respect to the wear properties of the mechnism and material.
                                </p>
                                <p>
                                    Cotton is an incredible material that we often take for granted. The clothes on our backs fold back and forth all day as we move, and yet we worry much more about tearing at seams than we do about wearing out points at which the fabric shears and bends. <a rel="external" href="https://cdn.intechopen.com/pdfs/12238/InTech-Mechanical_properties_of_fabrics_made_from_cotton_and_biodegradable_yarns_bamboo_spf_pla_in_weft.pdf" target="_blank"> These properties are actually shockingly difficult to quantify! </a>
                                </p>
                                <p>
                                    If you've ever cut paper by folding it back and forth across a seam a few times, you'll know that paper isn't very durable under this kind of stress. This means that the hinge of a paper-bound book is likely to wear much more poorly under frequent use than the hinge of a cloth-bound book, all else being equal.
                                </p>
                            </div>
                        </div>
                        <figure>
                            <div class="pictureContainer">
                                <div class="pictureLayout">
                                    <img src="${lifeCover}"/>
                                    <img src="${lifeHingeDamage}"/>
                                </div>
                            </div>
                            <figcaption>
                                Ecology (Life Nature Library) (1972)
                            </figcaption>
                        </figure>
                        <div class="paragraphBackdrop">
                            <div class="paragraphArea">
                                <p>
                                    Take this paper-bound book for instance. We notice minimal cover damage, but significant delamination to the hinge despite the fact that it is about as old as <i>The Complete Indoor Gardener</i>, whose cloth hinge has aged comparatively gracefully. Interestingly, we also see that the paper on the cover of this book has a little bit of texture. This is indicative of the transitionary period during which this book was produced, during which it was common practice to use paper that has been textured to resemble cloth. This practice does not appear to be particularly well-documented, with only a brief mention of "clothette" on wikipedia (a term which I cannot find substantiated elsewhere).
                                </p>
                            </div>
                        </div>
                        <figure>
                            <div class="pictureContainer">
                                <div class="pictureLayout">
                                    <img src="${okeCover}"/>
                                    <img src="${okeSpine}"/>
                                </div>
                            </div>
                            <figcaption>
                                The Okefenokee Swamp (Russel, Franklin) (1972)
                            </figcaption>
                        </figure>
                        <div class="paragraphBackdrop">
                            <div class="paragraphArea">
                                <p>
                                    As a final example, we have <i>The Okefenokee Swamp</i> from 1973. This style of binding uses paper for the front covers, <em>but cloth along the spine</em>. We can see that this cloth hinge has stood the test of time well. This is the style we tend to see in modern cloth-bound books, as it strikes a reasonable middleground between durability and cost.
                                </p>
                                <p>
                                    In fairness to paper, it is unmatched with respect to image reproduction. This makes it a very reasonable choice for the front and back faces of a book which, as mentioned before, don't exactly benefit a ton from the higher durability of cloth.
                                </p>
                                <p>
                                    In a future post, I'd love to dissect how these points relate to the manufacture and sale of books in 2026.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </h1>
    `
}
