# Extensions of Modules

## Introduction

A long exact sequence of $R$-modules
$$
    0 \lra B_{n-1} \lra \ldots \lra B_{1} \lra B_{0} \lra C \lra 0
$$
running from $A$ to $C$ though $n$ intermediate modules is called an __$n$-fold extension__ of $A$ by $C$. These extensions, suitably classified by a congruence relation, are the elements of a group $\Ext^{\bullet}(C,A)$. To calculate this group, we present $C$ as the quotient $C = F_{0}/S_{0}$ of a free module $F_{0}$; this process can be iterated as $S_{0} = F_{1} / S_{1}$, $S_{1} = F_{2}/S_{2}, \ldots$, to give an exact sequence
$$
    \ldots \lra F_{n} \lra F_{n-1} \lra \ldots \lra F_{1} \lra F_{0} \lra C \lra 0
$$
called a __free resolution__ of $C$. The complex $\Hom(F_{n},A)$ then has cohomology $\Ext^{\bullet}(C,A)$.

## Extensions and Ext

### Extensions of Modules

::: definition
Let $A$ and $C$ be modules over a fixed ring $R$. An __extension__ of $A$ by $C$ is a short exact sequence $E : A \into B \onto C$ of $R$-modules and $R$-module homomorphisms. A __morphism__ $\Gamma : E \ra E^{\prime}$ of extensions is a triple $\Gamma = (\alpha, \beta, \gamma)$ of module homomorphisms such that the diagram
(insert diagram) is commutative.

In particular, when $A^{\prime} = A$ and $C^{\prime} = C$, then two extensions $E$ and $E^{\prime}$ of $A$ by $C$ are __congruent__ (notation: $E \equiv E^{\prime}$) if there is a morphism $(\id_{A}, \beta, \id_{C}): E \ra E^{\prime}$.
:::

In the case that two extensions are congruent, the short Five Lemma shows that the middle homomorphism $\beta$ is an isomorphism. Thus congruence of extensions is a reflexive, symmetric, and transitive relation.

::: definition
Let $\Ext_{R}(C,A)$ denote the set of all congruence classes of extensions of $A$ by $C$.
:::

::: remark
An extension $A$ by $C$ is sometimes denoted by a pair $(B,\theta)$, where $A$ is a submodule of $B$, and $\theta$ is an isomorphism $B/A \cong C$. Each such pair determines a short exact sequcen $A \into B \onto B/A$ and every extension of $A$ by $C$ is congruent to one so obtained.
:::

::: example
One extension of $A$ by $C$ is the direct sum $A \into A \oplus C \onto C$. an extension is said to be __split__ if it is congruent to this direct extension.
:::

It can be shown that this is the case if and only if the map $B \rightarrow C$ has a right-inverse $\mu : C \rightarrow B$; or equivalently if the map $A \rightarrow B$ has a left-inverse.

::: example
Any extension by a projective module $P$ is split, to $\Ext_{R}(P,A)$ has only one element.
:::

::: proposition
For any _abelian_ group $A$ and for $\ZZ/m\ZZ$ the _cyclic_ group of order $m$, there is a one-to-one correspondence
$$
    \eta : \Ext_{\ZZ}\big(\ZZ/m\ZZ, A\big) \cong A/mA,
$$
where $mA$ is the _subgroup_ of $A$ consisting on _all_ $ma$ for $a \in A$.
:::
So here $\eta$ establishes a correspondence between a set $\Ext_{\ZZ}$ and an abelian group $A/mA$, hence $\Ext_{Z}(\ZZ/m\ZZ, C)$ is also an abelian group. We shall shortly show that $\Ext_{R}(C,A)$ is always an abelian group in fact.

### Ext Functor