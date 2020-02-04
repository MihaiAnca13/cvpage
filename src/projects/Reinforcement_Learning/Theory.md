---
title: "Theory"
date: "2020-02-04"
summary: "All important theory that helped me along the way"
---
## Random dictionary
+ MDP = Markov Decision Process  
+ Stochastic = refers to a randomly determined process  
+ Policy = a mapping from states to probabilities of taking each available action, in order to maximize the expected discounted future reward from each state s
+ Greedy policy = a policy which chooses any action that achieves the maximum reward in each given state
+ Bellman equations = recursively relate value functions to themselves (See example bellow)
$$
V^{*}(s)=\max _{a \in \mathcal{A}_{s}}\left[r_{s}^{a}+\gamma \sum_{s^{\prime}} p_{s s^{\prime}}^{a} V^{*}\left(s^{\prime}\right)\right]
$$
$$
Q^{*}(s,a)=r_{s}^{a}+\gamma \sum_{s^{\prime}} p_{s s^{\prime}}^{a} \max _{a^{\prime}} Q^{*}\left(s^{\prime}, a^{\prime}\right)
$$
+ Value Iteration = Start off with a random value function, which gets optimized iteratively
+ Policy Iteration = The actions which the agent needs to take are decided or initialized first and the value table is populated by running the policy
+ Semi-Markov options = policies and termination conditions may make their choices dependent on all prior events since the option was initiated

## Markovian process/chain
Probabilities of each state are defined in terms of transition. In other words, everything about state $S_{t+1}$ can be obtained from looking at $S_{t}$ and the action that triggered the state change, given that the model of the world is known.

## Markov Decision Process (MDP)
A learning _agent_ interacts with an _environment_ at some discrete time scale, _t_ = 0, 1, 2, ... . On each time step, _t_, the agent perceives the state of the environment, $s_{t} \in \mathcal{S}$, and on that basis chooses an action, $a_{t} \in \mathcal{A}_{s_{t}}$. In response to each action, $a_{t}$, the environment produces one step later a numerical reward, $r_{t+1}$, and a next state, $s_{t+1}$.

One-step state-transition probabilities:
$$
p_{s s^{\prime}}^{a}=\operatorname{Pr}\left\{s_{t+1}=s^{\prime} | s_{t}=s, a_{t}=a\right\}
$$

One-step expected rewards:
$$
r_{s}^{a}=E\left\{r_{t+1} | s_{t}=s, a_{t}=a\right\}
$$


## 