# Moment Maps

# Symplectic Cutting

Let $(M,\omega)$ be symplectic with a Hamiltonian $S^{1}$-action whose moment map is $\mu: M \rightarrow \R$. Consider now the product $M \times \mathbb{C}$ equipped with the product symplectic structure and the $S^{1}$-action
$$e^{i \theta} \cdot (m,\xi) := (e^{i \theta} \cdot m, e^{-i \theta} \xi),$$
whose moment map is
$$\Phi: M \times \mathbb{C} ⟶ \R,\qquad \Phi(m,\xi) = \mu(m) - |\xi|^{2}.$$

The _symplectic cut_ $M_{cut} := \Phi^{-1}(ϵ)/S^{1}$ is the symplectic quotient of $M \times \mathbb{C}$ at level $ϵ$.

::: remark Remark
The set $\Phi^{-1}(ϵ)$ decomposes into the disjoint union $\Phi^{-1}(ϵ) = \Sigma_{1} ⊔ \Sigma_{2}$, where
$$
\Sigma_{1} := \{ (m,\xi) \in M \times \mathbb{C} : \mu(m) > ϵ,\ |z| = + √{\mu(m) - ϵ} \},\quad \Sigma_{2} := \{ (m,0) \in M \times \mathbb{C} : \mu(m) = ϵ \}.
$$

On $\Sigma_{1}$, each orbit of the $S^{1}$-action contains a unique choice of $(m,z)$, where $z$ is in fact real and positive. Thus $\Sigma_{1}/S^{1} \cong \{m \in M : \mu(m) > ϵ \} =: M_{>ϵ}$. On the other hand, $\Sigma_{2}/S^{1}$ is just the usual symplectic quotient $\mu^{-1}(ϵ)/S^{1} \cong \Sigma_{2}/S^{1}$.

So the symplectic cut $M_{cut} = \Phi^{-1}(ϵ)/S^{1} \cong M_{>ϵ} \sqcup (\mu^{-1}(ϵ)/S^{1})$ can be viewed as $\{ m \in M : \mu(m) \geq ϵ \}$, with the $S^{1}$-action on the boundary being factored out.
:::

::: example Example

:::

