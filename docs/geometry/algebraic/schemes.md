---
lang: en-GB
---

# Schemes

$\gdef\mc#1{\mathcal{#1}}$
$\gdef\mf#1{\mathfrak{#1}}$

## Projective Schemes

### The _Proj_ Construction

Assume that $R$ is an integral graded ring, finitely-generated over $R_{0} = \CC$; such a ring $R = \CC[x_{0},\ldots, x_{n}]/I$ corresponds to an irreducible affine variety $\mathcal{C}(X) = \Spec(R) = V_{\mathbb{A}}(I) \subseteq \mathbb{A}^{n+1}$, where the subscript of $V_{\AA}(I)$ stands for the affine or inhomogeneous. $\mc{C}(X)$ is called the (weighted homogeneous) _affine cone_ over the projective variety $V_{\mathbb{P}}(I) = X$, which is defined as the _homogeneous spectrum_:
$$
X = \Proj(R) = V_{\mathbb{P}}(I) := (V_{\mathbb{A}}(I) - \{0\})/\mathbb{G}_{m} \subseteq \mathbb{P}(a_{0},\ldots,a_{n}),
$$
where the $a_{0},\ldots, a_{n} \in \mathbb{Z}_{\geq 0}$ are the weights of the $\GG_{m}$-action on the coordinates $x_{0},\ldots, x_{n}$ of $\mathcal{C}(X)$.

::: remark Remark
In the case when $R_{0} = \CC$ (or any other field for that matter), $\Spec(R_{0}) = \{0\}$ and $\Proj(R)$ can be also viewed as $\Proj(R) = (\Spec(R) - \Spec(R_{0}))/\mathbb{G}_{m}$.
:::

::: remark Remark
When $R$ is generated by $R_{1}$ over $R_{0}$, then $R$ is a quotient of $Sym_{R_{0}}(R_{1})$, $\Spec(R)$ is a subspace of $\Spec(R_{0}) \times R_{1}^{\ast}$, and $\Proj(R)$ is a subspace of $\Spec(R_{0}) \times \mathbb{P}(R_{1}^{\ast})$.

In particular, the inclusion of $R_{0} \hookrightarrow R$ induces a map from $\Proj(R) \rightarrow \Spec(R_{0})$, whose fibres are subvarieties of $\mathbb{P}(R_{1}^{\ast})$. For this reason, the variety $\Proj(R)$ is often referred to as being _projective over (an) affine_.
:::

::: tip Example
Consider the polynomial ring $R = \CC[x_{0},\ldots, x_{n}]$ with the standard grading, so that the ideal $I$ in the definition is trivial. Then $\mathcal{C}(X) = \Spec(R)  = V_{\mathbb{A}}(\{0\}) \cong \mathbb{A}^{n+1}$. Then
$$
X = \Proj(R) = (\Spec(R) - \Spec(R_{0})/\CC^{\ast} \cong (\mathbb{A}^{n+1} - \{0\})/\CC^{\ast} = \mathbb{P}^{n},
$$
as the affine cone of $n$-dimensional projective space $\mathbb{P}^{n}$ is just $(n+1)$-dimensional affine space $\mathbb{A}^{n+1}$.
:::

### Projective Scheme(s) over an Affine Scheme

(Hartshorne Corollary 5.16)

::: proposition Proposition
Let $R$ be a ring.

- If $Y$ is a closed subscheme of $\PP_{R}^{n}$, then there is a homogeneous ideal $I \lhd S = R[x_{0},\ldots, x_{n}]$ such that $Y$ is the closed subscheme determined by $I$.
- A scheme $Y$ over $\Spec(R)$ is projective if and only if it is isomorphic to $\Proj(S)$ for some graded ring $S$, where $S_{0} = R$, and $S$ is finitely generated by $S_{1}$ as an $S_{0}$-algebra.

:::

### Truncated Rings and the Veronese Embedding

Let $R$ be a graded ring. The _$d$-th truncated ring_ is the subring $R^{[d]} \subset R$ defined by
$$
    R^{[d]} := \bigoplus_{d | n} R_{n} = \bigoplus_{i \geq 1}R_{di},
$$
i.e we only consider the homogeneous pieces of $R$ that are of degree divisible by $d$.

::: tip Example
Let $R = \CC[x_{0},x_{1}]$ which has $\Proj(R) = \mathbb{P}^{1}$. Then $R^{[2]} = \CC[x_{0}^{2},x_{0}x_{1}, x_{1}^{2}] \cong \CC[a,b,c]/(ac - b^{2})$, and $R^{[3]} = \CC[x_{0}^{3},x_{0}^{2}x_{1},x_{0}x_{1}^{2},x_{1}^{3}] \cong \CC[a,b,c,d]/(ad-bc, ac - b^{2}, bd - c^{2})$, etc.
:::

::: proposition Proposition
For a graded ring $R$ as above,
$$
    \Proj(R^{[d]}) \cong \Proj(R),\qquad \text{for any } d> 0.
$$
:::

## References

[1] M. Reid, ‘Graded rings and varieties in weighted projective space’.

[2] N. Proudfoot, ‘Lectures on Toric Varieties’.