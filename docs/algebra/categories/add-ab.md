# Additive and Abelian Categories

## Axioms

The notion of an abelian category is used to axiomatise main properties of the following categories:
- Abelian groups;
- Modules over a ring;
- Presheaves of abelian groups;
- Sheaves of abelian groups.

Thus we put forward four axioms in order to define an abelian category $\mcC$.

### Axiom 1

::: remark Axiom 1
Any set $\Hom_{\mcC}(X,Y)$ is an abelian group (which we shall write using additive notation); the composition of morphisms is bi-additive.
:::

This is to say that $\Hom_{\mcC}$ is a functor $\mcC^{\circ} \times \mcC \rightarrow Ab$. This also implies that each set $\Hom_{\mcC}(X,Y)$ is non-empty, since every group contains the zero element.

### Axiom 2

::: remark Axiom 2
There exists a zero object $0 \in \Ob \mcC$, that is an object such that $\Hom_{\mcC}(0,0)$ is the zero group.
:::

This implies that $\Hom_{\mcC}(0,X)$ and $\Hom_{\mcC}(X,0)$ are also the zero groups for any $X \in \Ob \mcC$, and that any two zero objects are isomorphic.

### Axiom 3

::: remark Axiom 3
For any two objects $X_{1}, X_{2}$, there exists an object $Y$ and morphisms
$$
    (insert diagram)
$$
such that
$$
    p_{1}i_{1} = \id_{X_{1}},\quad p_{2}i_{2} = \id_{X_{2}},\quad i_{1}p_{1} + i_{2}p_{2} = \id_{Y},\quad p_{2}i_{1} = p_{1}i_{2} = 0.
$$
:::

This implies the existence of direct sums and direct products for any two $X_{1}, X_{2} \in \Ob \mcC$, and that they are equal to $Y$.

### Axiom 4

::: remark Axiom 4
For any morphism $\vp : X \rightarrow Y$ there exists a sequence
$$
    K \overset{k}{\longrightarrow} X \overset{i}{\longrightarrow} I \overset{j}{\longrightarrow} Y \overset{c}{\longrightarrow} K^{\prime}
$$
with the following properties:
- $j \circ i = \vp$;
- $K$ is the kernel of $\vp$, $K^{\prime}$ is the cokernel of $\vp$;
- $I$ is both the cokernel of $k$ and the kernel of $c$.
:::

The definitions for both the kernel and cokernel of a morphism shall be covered in the next section.

::: definition
Any such sequence is called a __canonical decomposition__, and the object $I$ is called the __image__ of $\vp$ and is denoted by $\Image(\vp)$.
:::

## Additive Categories, Kernels and Cokernels

### Additive Categories

::: definition
An __additive category__ $\mcC$ is a category $\mcC$ that satisfies axioms 1-3 listed above.
:::

::: definition
Let $\kk$ be any field. An additive category $\mcC$ is said to be $\kk$__-linear__ (or __defined over__ $\kk$) if, for any two objects $X, Y \in \mcC$, $\Hom_{\mcC}(X,Y)$ is equipped with a structure of a vector space over $\kk$, such that composition of morphisms is $\kk$-linear.
:::

::: definition
Let $F : \mcC \ra \mcD$ be a functor between two additive categories. The functor $F$ is called __additive__ if the associated maps
$$
    \Hom_{\mcC}(X,Y) \ra \Hom_{\mcD}(F(X), F(Y)),\quad X,Y \in \mcC,
$$
are homomorphisms of abelian groups. If $\mcC$ and $\mcD$ are $\kk$-linear categories then $F$ is called $\kk$__-linear__ if all these homomorphisms are $\kk$-linear.
:::

::: proposition
For any additive functor $F : \mcC \ra \mcD$, there exists a natural isomorphism $F(X) \oplus F(Y) \overset{\sim}{\lra} F(X \oplus Y)$.
:::

### Kernels and Cokernels

::: definition
Let $\mcC$ be an additive category, and $f:X \ra Y$ a morphism in $\mcC$. The __kernel__ $\Ker(F)$ of $f$ is (if it exists) an object $K$ together with a morphism $k : K \ra X$ such that $f \circ k = 0$, and if $k^{\prime} : K^{\prime} \ra X$ is such that $f \circ k^{\prime} = 0$, then there exists a unique morphism $l : K^{\prime} \ra K$ such that $k \circ l = k^{\prime}$. If $\Ker(f)$ exists then it is unique up to isomorphism.
:::

::: definition
Similarly, the __cokernel__ $\Coker(f)$ of a morphism $f : X \ra Y$ in $\mcC$ is (if it exists) is an object $C$ together with a morphism $c : Y \ra C$ such that $c \circ f = 0$, and if $c^{\prime} : Y \ra C^{\prime}$ is such that $c^{\prime} \circ f = 0$, then there exists a unique morphism $l : C \ra C^{\prime}$ such that $l \circ c = c^{\prime}$. If $\Coker(f)$ exists then it is unique up to isomorphism.
:::

## Abelian Categories

::: definition
An __abelian category__ is a category $\mcC$ that satisfies axioms 1 - 4. So an abelian category can be thought of as an additive category which also possesses a canonical decomposition.
:::

In an abelian category, the canonical decomposition of a morphism is unique up to isomorphism.

::: example Examples
Examples of abelian categories include:
- The category of abelian groups, $\catAb$;
- The category of modules over a ring $R$, $R$-$\catMod$;
- The category of vector spaces over a field $\kk$, $\catVec$, which is further a $\kk$-linear abelian category;
- More generally, the category of modules over an associative $\kk$-algebra and the category of comodules over a coassociative $\kk$-algebra are $\kk$-linear abelian categories.
:::

::: definition Definitions
Let $\mcC$ be an abelian category. A morphism $f : X \ra Y$ is said to be a __monomorphism__ if $\Ker(f) = 0$. It is said to be an __epimorphism__ if $\Coker(f) = 0$.
:::

::: definition Definitions
A __subobject__ of an object $Y$ is an object $X$ together with a monomorphism $i : X \ra Y$. A __quotient object__ of $Y$ is an object $Z$ with an epimorphism $p : Y \ra Z$. A __subquotient object__ of $Y$ is a quotient object of a subobject of $Y$.
:::

Let $\mcC_{\alpha}$, $\alpha \in I$, be a family of additive categories. The direct sum $\mcC = \oplus_{\alpha \in I} \mcC_{\alpha}$ is the category whose objects are sums
$$
    X = \bigoplus_{\alpha \in I} X_{\alpha},\qquad X_{\alpha} \in \mcC_{\alpha},
$$
such that almost all $X_{\alpha}$ are zero, with
$$
    \Hom_{\mcC}(X,Y) = \bigoplus_{\alpha \in I} \Hom_{\mcC_{\alpha}}(X_{\alpha}, Y_{\alpha})
$$
for $X = \oplus_{\alpha \in I} X_{\alpha}$ and $Y = \oplus_{\alpha \in I} Y_{\alpha}$. The resulting $\mcC$ is additive, and is also abelian if all the $\mcC_{\alpha}$ are abelian.

::: definition
An abelian category $\mcC$ is said to be __indecomposable__ if it is not equivalent to a direct sum of two non-zero categories.
:::

We have the following pathological result, which allows one to think of morphisms, kernels, cokernels, subobjects, quotient objects, etc. in an abelian category in terms of the more familiar linear algebra terms.

::: theorem Theorem (Mitchell)
Every abelian category is equivalent, as an additive category, to a full subcategory of the category of left modules over an associative unital ring $A$.
:::

::: remark
A major drawback on this theorem is that the ring $A$ is not unique.
:::

## Length of Objects

Let $\mcC$ be an abelian category.

::: definition
A non-zero object $X$ in $\mcC$ is called __simple__ if 0 and $X$ are its only subobjects. An object $X$ in $\mcC$ is called __semi-simple__ if it is a direct sum of simple objects, and $\mcC$ is called __semi-simple__ if every object of $\mcC$ is semi-simple.
:::

::: lemma Lemma (Schur)
Let $X,Y$ be two simple objects in $\mcC$. Then any non-zero morphism $f : X \ra Y$ is an isomorphism. In particular, if $X$ is not isomorphic to $Y$ then $\Hom_{\mcC}(X,Y)) = 0$, and $\Hom_{\mcC}(X,X)$ is a division algebra.
:::

Let $X$ be an object in an abelian category $\mcC$.

::: definition Definitions
We say that $X$ has __finite length__ if there exists a filtration
$$
    0 = X_{0} \subset X_{1} \subset \ldots \subset X_{n-1} \subset X_{n} = X
$$
such that $X_{i}/X_{i-i}$ is simple for all $1 \leq i \leq n$. Such a filtration is called a __Jordan-Hölder series__ of $X$. We say that this Jordan-Hölder series __contains__ a simple object $Y$ with __multiplicity__ $m$ if the number of values of $i$ for which $X_{i}/X_{i-1}$ is isomorphic to $Y$ equals $m$.
:::

::: theorem Theorem (Jordan-Hölder)
Suppose that $X$ has finite length. Then any filtration of $X$ can be extended to a Jordan-Hölder series, and any two Jordan-Hölder series of $X$ contain every simple object with the same multiplicity, so in particular have the same length.
:::

::: definition
The __length__ of an object $X$ is the length of its Jordan-Hölder series (if the series exists).
:::

::: example
An example of a category in which every object has finite length is the category of finte-dimensional modules over an algebra.
:::

::: theorem Theorem (Krull-Schmidt)
Any object of finite length admits a unique (up to isomorphism) decomposition into a direct sum of indecomposable objects.
:::

Let $\mcC$ be an abelian $\kk$-linear category where each of its objects has finite length. If $X$ and $Y$ are objects in $\mcC$ such that $Y$ is simple then we denote by $[X:Y]$ the multiplicity of $Y$ in a Jordan-Hölder series of $X$. By the Jordan-Hölder theorem, this is well-defined.

::: definition
The __Grothendieck group__ $\Gr$ of $\mcC$ is the free abelian group generated by the isomorphism classes $X_{i}$ of simple objects in $\mcC$. To every object $X$ in $\mcC$ we can canonically associate its class $[X] \in \Gr(\mcC)$ given by the formula
$$
    [X] = \sum_{i} [X : X_{i}]X_{i}.
$$

If $0 \ra X \ra Y \ra Z \ra 0$ is a short exact sequence, then $[Y] = [X] + [Z]$. If no confusion is possible, then $[X]$ will simply be written as $X$.
:::

::: example
Let $S$ be a set and let $\mcC = \catVec_{S}$ be the abelian category of finite-dimensional $\kk$-vector spaces graded by $S$. Then $\Gr(\mcC) = \ZZ S$, the free abelian group on $S$.
:::

## Projective and Injective Objects

::: definition
Let $\mcC, \mcD$, be abelian categories. An additive functor $F : \mcC \ra \mcD$ is called __left__ (repectively, __right__) __exact__ if, for every short exact sequence $0 \ra X \ra Y \ra Z \ra 0$ in $\mcC$, the sequence
$$
    0 \ra F(X) \ra F(Y) \ra F(Z) \quad \text{respectively,} \quad F(X) \ra F(Y) \ra F(Z) \ra 0 \text{)}
$$
is exact in $\mcD$. A functor is said to be __exact__ if it is both left and right exact.
:::

::: remark
One similarly uses the terms _left exact_, _right exact_, and _exact_ for contravariant functors. 
:::

::: example Examples
- Let $X,Y$ by objects in an abelian category $\mcC$. The contravariant functor $\Hom_{\mcC}(-,Y)$ and the covariant functor $\Hom_{\mcC}(X,-)$ from $\mcC$ to the category of abelian groups are left exact.
- If $A$ is a ring and $M$ is a right $A$-module, then the functor $V \mapsto M \otimes_{A} V$ from the category of left $A$-modules to the category of abelian groups is right exact.
:::

::: definition Definitions
An object $P$ in an abelian category $\mcC$ is called __projective__ if the functor $\Hom_{\mcC}(P,-)$ is exact. An object $I$ in $\mcC$ is called __injective__ if the functor $\Hom_{\mcC}(-,I)$ is exact.
:::