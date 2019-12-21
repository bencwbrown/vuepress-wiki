# General Fundamentals

## Monoids and Groups

::: definition
A __monoid__ is a semi-group $S$ with has a __unit element__ $1$, such that $1s = s1 = s$ for each $s \in S$.
:::

::: remark
If a semi-group $S$ lacks a unit element, we can adjoin a formal element $1$ to produce a monoid $S^{\prime} = S \cup \{1\}$ and asserting that $1s = s1 = s$ for all $s$ in $S$.
:::

::: theorem Theorem (Fundamental Theorem of Abelian Groups)
Every finitely-generated abelian group is isomorphic to a finite direct sum of cyclic subgroups.
:::

::: definition
An element of a group is __torsion__ if it has finite order. THe set of torsion elements of an abelian group $G$ is clearly a subgroup, and we say that $G$ is __torsion-free__ if its torsion subgroup is $0$.
:::

Since any cyclic group is isomorphic to either $(\ZZ,+)$ or $(\ZZ/n\ZZ,+)$ for some $n$ in $\ZZ$, we have:

::: corollary
Every finitely-generated abelian group is the direct sum of a torsion-free abelian group and a finite abelian group.
:::

## Algebras

::: definition
Let $C$ denote a commutative ring. A $C$__-algebra__ (or __algebra over__ $C$) is a ring $R$ which is also a $C$-module whose scalar multiplications satifies the extra prop
:::





























---

## References

[1] Rowen, L.H. Ring theory Volume 1; Pure and applied mathematics; Academic Press: Boston, 1988; ISBN 978-0-12-599841-3.
