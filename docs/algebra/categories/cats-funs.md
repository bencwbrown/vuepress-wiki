# Categories and Functors

## Categories

### Definitions

::: definition Definitions
A __category__ $\mcC$ consists of the following data:
- A set of $\Ob \mcC$ wholse elements are called __objects__ of $\mcC$;
- A collection of sets $\Hom(X,Y)$, one for each ordered pair of objects $X, Y \in \Ob \mcC$, whose elements are called __morphisms__ (from $X$ to $Y$); they are denoted $\vp: X \rightarrow Y$;
- A collection of mappings
$$
    \Hom(X,Y) \times \Hom(Y,Z) \longrightarrow \Hom(X,Z),
$$
one for each ordered triple of objects $X,Y,Z \in \Ob \mcC$. Any mapping in this collection associates to a pair $\vp: X \rightarrow Y$, $\psi: Y \rightarrow Z$, a morphism from $X$ to $Z$, denoted $\psi \circ \vp : X \rightarrow Z$, and called the __composition__ or __product__ of $\vp$ and $\psi.$

This data should satisfy the following conditions:
- Any morphism $\vp$ uniquely determines $X,Y \in \Ob \mcC$ such that $\vp \in \Hom(X,Y)$. In other words, the sets $\Hom(X,Y)$ are pairwise disjoint.
- For any $X \in \Ob \mcC$ there exists the identity morphism $\id_{X} : X \rightarrow X$ of $X$; it is determined uniquely by the conditions $\id_{X} \circ \vp = \vp$, $\psi \circ \id_{X} = \psi$ wherever these compositions are defined.
- The composition of morphisms is associateive
$$
    (\xi \circ \psi) \circ \vp = \xi \circ (\psi \circ \vp)
$$
for any $\vp : X \rightarrow Y$, $\psi: Y \rightarrow Z$, $\xi: Z \rightarrow U$.
:::

::: warning Notation
Sometimes it is abbreviated $X \in \mcC$ rather thatn $X \in \Ob \mcC$, and $\Hom_{C}(X,Y)$ or $\mcC(X,Y)$ instead of $\Hom(X,Y)$. A morphism $\vp \in \Hom(X,Y)$ may sometimes be called an __arrow__ starting at $X$ and ending at $Y$. The set $\cup_{X,Y \in \mcC} \Hom(X,Y)$ is denoted $\Mor(\mcC)$.
:::

### Category of Sets and Categories of Sets with a Structure

An important class of categories is formed by categories whose objects are sets with some additional structure, and whose morphisms are maps respecting this structure.

::: example Examples
- $Top$, the category of topological spaces with continuous maps between them;
- $Diff$, the category of smooth manifolds and smooth maps;
- $Ab$, the category of abelian groups and homomorphisms;
- $A$-mod, the category of left-modules over some fixed ring $A$;
- $Gr$, the category of groups and homomorphisms.
:::

### More Examples

In this group of examples, the objects of the categories are the same as in the list above, _i.e._ sets with additional structure, but here we define different morphims.

- The category $Toph$:
$$
\begin{aligned}
    \Ob\ Toph = \Ob\ Top &= \{\text{topological spaces}\}, \\
    \Hom_{Toph}(X,Y) &= \text{ the set of homotopy classes of continuous mappings from } X \text{ to } Y.
\end{aligned}
$$

- The category of relations $Rel$:
$$
\begin{aligned}
     \Ob Rel = \Ob Set &= \text{sets in the given Universe},\\
    \Hom_{Rel}(X,Y) &= \{\text{subsets of the direct product } X \times Y  \}.
\end{aligned}
$$
The composition of $\vp : X \rightarrow Y$ and $\psi : Y \rightarrow Z$ is defined as follows:
$$
    \psi \circ \vp = \{ (x,z) \in X \times Z : \text{there exists } y \in Y \text{ such that } (x,y) \in \vp, (y,z) \in \psi \} \subset X \times Z.
$$
The identity morphism is the diagonal
$$
    \id_{X} = \{ (x,x) : x \in X \} \subset X \times X.
$$

- The category $Rel\ Ab$ of addititve relations:
$$
\begin{aligned}
     \Ob Rel\ Ab = \Ob Ab &= \{\text{abelian groups}\}, \\
    \Hom_{Rel\ Ab}(X,Y) &= \text{the set of subgroups in } X \times Y.
\end{aligned}
$$
The composition of morphisms and the identity morphism are defined the same way as in the previous example.

- The category $\mcC(I)$ of a partially ordered set $I$:
$$
\begin{aligned}
    \Ob \mcC(I) \quad=\quad &I,\\
    \Hom_{\mcC(I)}(i,j) \qquad &\text{consists of one element if } i \leq j \text{ and is empty otherwise.}
\end{aligned}
$$
The composition of morphisms and the identity morphism are defined in the only possible way. An important special case of $\mcC(I)$ is:

- The category $Top_{X}$. Let $X$ be a topological space. Define
$$ \begin{aligned}
\Ob Top_{X} \quad &= \quad \{  \text{open subsets of } X \}, \\
\Hom(U,V) \quad &= \quad \text{the inclusion } U \rightarrow V \text{ if } U \subset V, \\
\Hom(U,V) \quad &  \qquad \text{is empty if } U \not\subset V.
\end{aligned}
$$

## Functors

::: definition
A __covariant functor__ $F$ from a category $\mcC$ to a category $\mcD$ (notation: $F: \mcC \rightarrow \mcD$) consists of the following data:
- A mapping $\Ob \mcC \rightarrow \mcD : X \rightarrow F(X)$;
- A mapping $\Mor \mcC \rightarrow \mcD: \vp \rightarrow F(\vp)$ such that for $\vp \in \Hom_{\mcC}(X,Y)$ we have that $F(\vp) \in \Hom_{\mcD}(F(X), F(Y))$.
This data should satisfy the following conditions: $F(\vp \circ \psi) = F(\psi)$ for any $\vp, \psi \in \Mor \mcC$ for which $\vp \circ \psi$ is defined. In particular, $F(\id_{X}) = \id_{F(X)}$.
:::

::: example
Consider the mapping $h_{X} : \mcC \rightarrow Set, X \in \Ob \mcC$,
$$
    \begin{aligned}
        h_{X}(Y) &= \Hom_{\mcC}(X,Y), \\
        h_{X}(f)(\vp) &= f \circ \vp, \text{ where } f : Y \rightarrow Y^{\prime}, \vp \in \Hom_{\mcC}(X,Y).
    \end{aligned}
$$
:::

::: example
Given any category $\mcC$, we can construct the __opposite category__ of $\mcC$, denoted $\mcC^{op}$. It has the same objects as $\mcC$, but for any two $X, Y \in \Ob\mcC$, $\Mor_{\mcC^{op}}(X,Y) = \Mor_{\mcC}(Y,X)$.
:::

::: definition
A __contravariant functor__ from a category $\mcC$ to a category $\mcD$ is a covariant functor from $\mcC$ to $\mcD^{op}$.
:::

::: example Examples
- Any presheaf of abelian groups on a topological space $X$ is a functor
$$
    F: Top_{X} \longrightarrow Ab.
$$
- Let $I$ be a partially ordered set, $\mcC(I)$ be the corresponding category. A functor $G : \mcC(I) \rightarrow Ab$ is a family of abelian groups $\{ G(i) : i \in I \}$ and of maps $g_{ij} : G_{i} \rightarrow G_{j}$, one for each ordered pair $i \leq j$. These maps should satisfy the conditions $g_{ij} \circ g_{ij} = g_{ik}$ for $i \leq j \leq k$, $g_{ii} = \id_{G_{i}}$. Such families usually appear as raw material for inductive and/or projective limits.
- By simply forgetting one or more structures on an object, we obtain many functors for the initial category. For example,
$$
    Top,\ Diff, \ Ab, \ Gr \longrightarrow Set,
$$
are functors that simply forget the topological, differentiable, abelian group, and group structures of the objects in the initial category, respectively. Since these functors "forget" some or all of the structure(s) of the object in the initial category, these are examples of __forgetful functors__.
:::

::: definition
Let $F,G$ be two functors from $\mcC$ to $\mcD$. A __morphism of functors__ from $F$ to $G$ (notation: $f:F \rightarrow G$) is a family of morphisms in $\mcD$:
$$
    f(X): F(X) \longrightarrow G(X),
$$
one for each $X \in \Ob \mcC$, satisfying the following condition: for any morphism $\vp : X \rightarrow Y$ in $\mcC$, the diagram (insert diagram) is commutative.
:::

The composition of morphisms of functors, as well as the identity morphism of functors, are defined in the obvious way. Thus, functors from $\mcC$ to $\mcD$ form a category in their own right, which is usually denoted $Funct(\mcC,\mcD)$.

## Subcategories

::: definition
A category $\mcC$ is said to be a __subcategory__ of a category $\mcD$ if
- $\Ob \mcC \subset \Ob \mcD$;
- $\Hom_{\mcC}(X,Y) \subset \Hom_{\mcD}(X,Y)$ for any $X,Y \in \Ob \mcC$;
- The composition of morphisms in $\mcC$ coincide with their composition in $\mcD$, for $X \in \Ob \mcC$ the identity morphism $\id_{X}$ in $\mcC$ coincides with the identity morphism $\id_{X}$ in $\mcD$.
:::

::: definition Definitions
A subcategory $\mcC$ is said to be __full__ if $\Hom_{\mcC}(X,Y)$ = $\Hom_{\mcD}(X,Y)$ for any $X,Y \in \Ob \mcC$.

A functor $f : \mcC \rightarrow \mcD$ is said to be __faithful__ if for any $X,Y \in \Ob \mcC$ the map
$$
    F : \Hom_{\mcC}(X,Y) \longrightarrow \Hom_{\mcD}(FX,FY)
$$
is injective, and __full__ if this map is surjective.

An object $\alpha$ of a category $\mcC$ is said to be an __initial object__ if $\Hom_{\mcC}(\alpha, X)$ is a one-element set of any $X \in \Ob \mcC$. Similarly, an object $\w$ is said to be a __final object__ in $\mcC$ if $\Hom_{\mcC}(X,\w)$ is a one-element set for any $X \in \Ob \mcC$. 
:::

Both initial and final objects are determined uniquely up to isomorphism, if they exist.

## To Do

- Isomorphisms of categories
- Equivalence of categories
- Quasi-inverses of functors