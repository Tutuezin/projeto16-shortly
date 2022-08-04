--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.4 (Ubuntu 14.4-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: clientes; Type: TABLE; Schema: public; Owner: tutuzera
--

CREATE TABLE public.clientes (
    id integer NOT NULL,
    nome character varying(50) NOT NULL,
    cpf character varying(11) NOT NULL,
    numero_compras integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.clientes OWNER TO tutuzera;

--
-- Name: clientes_id_seq; Type: SEQUENCE; Schema: public; Owner: tutuzera
--

CREATE SEQUENCE public.clientes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clientes_id_seq OWNER TO tutuzera;

--
-- Name: clientes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tutuzera
--

ALTER SEQUENCE public.clientes_id_seq OWNED BY public.clientes.id;


--
-- Name: clientes id; Type: DEFAULT; Schema: public; Owner: tutuzera
--

ALTER TABLE ONLY public.clientes ALTER COLUMN id SET DEFAULT nextval('public.clientes_id_seq'::regclass);


--
-- Data for Name: clientes; Type: TABLE DATA; Schema: public; Owner: tutuzera
--

COPY public.clientes (id, nome, cpf, numero_compras) FROM stdin;
2	Benício Freire Sampaio	98765432100	6
3	Orlando Pequeno Jesus	10293847560	1
4	Olga Cascais Fortunato	01928374650	2
5	Martinha Lima Zambujal	11992288445	2
6	Anabela Baptista Soverosa	22883377446	6
7	Raul Arouca Pederneiras	11889922385	1
8	Chico Buarque de Holanda	65719484743	10
9	Lucca Santarém Branco	48769275911	4
10	Patrícia Toste Prudente	19847457596	3
1	Allana Fidalgo Moreira	22222222222	4
\.


--
-- Name: clientes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tutuzera
--

SELECT pg_catalog.setval('public.clientes_id_seq', 11, true);


--
-- Name: clientes clientes_pkey; Type: CONSTRAINT; Schema: public; Owner: tutuzera
--

ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

